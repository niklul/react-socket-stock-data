import React, { Component } from 'react';
import './stock-table.css';
import WebsocketService from '../../_lib/reconnecting-socket'


class StockTable extends Component {

    reconnecting_socket;
    stock_data;

    componentDidMount(){
        this.socket_service = new WebsocketService('ws://stocks.mnet.website')
        this.socket_service.connect().subscribe(
            (dat)=>{
                this.stock_data = dat;
                console.log(this.stock_data)
            },
            (err)=>{
                // TODO: need efficiency
                alert(err)
            }
        )
    }

    render() {
        return (
            <div>
                hello
            </div>
        );
    }
}

export default App;
