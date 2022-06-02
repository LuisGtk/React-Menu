import React, {useState, useEffect} from 'react'
import './App.css';
import Meals from './components/Meals';

function App() {




  return (
    <div className="App">
      <header className="App-header">
        <h2>Check out our 'Order Up' Menu</h2>
        <a
          className="Menu"
          href="/Meals"
        >
          View Our highly-rated menu
        </a>
      </header>
    </div>
  );
}

export default App;
