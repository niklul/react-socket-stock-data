import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import StockTable from './components/stock-data';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const styles={
  root:{
    padding: '16px',
    paddingTop: '80px',
  }
}

class App extends Component {

  render() {
    const {classes} = this.props
    return (
      <div className={classes.root}>
          <AppBar position="fixed" color="primary">
              <Toolbar>
                  <Typography variant="h6" color="inherit">
                      Real Time Stock Values
                  </Typography>
              </Toolbar>
          </AppBar>
        <StockTable/>
      </div>
    );
  }
}

export default withStyles(styles)(App);
