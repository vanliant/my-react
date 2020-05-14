import React from 'react';
// import logo from './logo.svg';
import './App.css';

// import Weather from './components/Weather'
// import Clock from './components/Clock'
import Parent from './components/parentComponent/Parent'

function App() {
  return (
    <div className="App">
      {/* <Weather weather='下雨'/> */}
      {/* <Clock /> */}
      <Parent />
    </div>
  );
}

export default App;
