import React from 'react';
import Database from '../../database/Database';
import './App.scss';

class App extends React.Component {
  componentDidMount() {
    Database.init();
  }

  render() {
    return (
      <div id="app"></div>
    );
  }
}

export default App;
