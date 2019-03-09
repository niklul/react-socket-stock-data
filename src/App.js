import React, { Component } from 'react';
import './App.css';
import StockTable from './components/stock-data'

class App extends Component {

  render() {
    return (
      <div>
        <StockTable/>
      </div>
    );
  }
}

export default App;
