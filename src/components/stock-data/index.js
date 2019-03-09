import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import WebsocketService from '../../_lib/reconnecting-socket';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import StockRow from './elements/stock-row';


const styles={
    container:{
        maxWidth: '500px',
        margin: 'auto'
    }
}

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

    getTableRows = ()=>{
        const {stock_data} = this.state;
        const table = []
        for (let key in stock_data){
            let item = stock_data[key]

            table.push(
                <StockRow key={key} name={key} {...item} />
            )
        }

        return table

    }

    render() {
        const {classes} = this.props;
        return (
            <Paper className={classes.container}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Company</TableCell>
                            <TableCell align="left">Stock Value</TableCell>
                            <TableCell align="right">Last updated</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.getTableRows()}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default withStyles(styles)(StockTable);
