import React, { Component } from 'react';
import styles from './stock-data.css';
import { withStyles } from '@material-ui/core/styles';
import WebsocketService from '../../_lib/reconnecting-socket';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


class StockTable extends Component {

    socket_service;
    state={
        stock_data:{}
    }

    constructor(props){
        super(props)
        this.socket_service = new WebsocketService('ws://stocks.mnet.website')
    }

    componentDidMount(){

        this.socket_service.connect().subscribe(
            (data)=>{
                this.handleIncoming(JSON.parse(data.data))
            },
            (err)=>{
                // TODO: need efficiency
                alert(err)
            }
        )
    }

    handleIncoming = (data)=>{
        const {stock_data} = this.state;
        for (let i = 0; i < data.length; i++) {
            let item = data[i]
            if (stock_data[item[0]]){
                stock_data[item[0]] = {
                        value: item[1],
                        updated_at: new Date(),
                        previous_value: stock_data[item[0]].value
                }
            }else {
                stock_data[item[0]] = {
                    value: item[1],
                    updated_at: new Date(),
                    previous_value: item[1]
                }
            }
        }
        this.setState({stock_data})
    }

    render() {
        const {classes} = this.props;
        const {stock_data} = this.state
        return (
            <div>
                hello
            </div>
        );
    }
}

export default withStyles(styles)(StockTable);
