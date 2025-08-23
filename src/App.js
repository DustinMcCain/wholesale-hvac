import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import './App.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
