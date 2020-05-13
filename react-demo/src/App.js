import React from 'react';
import logo from './logo.svg';
import './App.css';

import Weather from './components/Weather'

function App() {
  return (
    <div className="App">
      <Weather weather='下雨'/>
    </div>
  );
}

export default App;
