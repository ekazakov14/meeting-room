import React from 'react';
import logo from './assets/logo.svg';
import Header from './components/Header';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Header
        logo={<img src={logo} alt="App logo" />}
        actionButton={<Button theme="primary" size="lg">Создать встречу</Button>} />
      
    </div>
  );
}

export default App;
