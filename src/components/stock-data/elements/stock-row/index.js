import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const styles = {
    down:{
        color: '#b00020',
    },
    up:{
        color: '#03dac6'
    }
}

class StockRow extends Component{

    getReadableTime = (date)=>{
        // TODO: handle minutes when 18:02 -> 18:2
        return date.getHours() + ':'+ date.getMinutes()
    }

    render(){
        const {name, value, updated_at, previous_value, classes} = this.props;
        return(
            <React.Fragment>
                <TableRow >
                    <TableCell >{name}</TableCell>
                    <TableCell align="left" className={`${value>  previous_value && classes.up} ${value < previous_value && classes.down}`}>
                        {value}
                    </TableCell>
                    <TableCell align="right">{this.getReadableTime(updated_at)}</TableCell>
                </TableRow>
            </React.Fragment>
        )
    }
}


export default withStyles(styles)(StockRow)