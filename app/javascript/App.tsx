import React from 'react';
import { Counter } from './features/counter/Counter';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo not found" />
        <Counter />
      </header>
    </div>
  );
}

export default App;
