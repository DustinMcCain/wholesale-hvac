import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import './App.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/wholesale-hvac' : '/'}>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
