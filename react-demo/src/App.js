import React from 'react';
// import logo from './logo.svg';
import './App.css';

// import Weather from './components/Weather'
// import Clock from './components/Clock'
// import Parent from './components/parentComponent/Parent'
// import Event from './components/Event'
import Condition from './components/conditionRender/index'

function App() {
  return (
    <div className="App">
      {/* <Weather weather='下雨'/> */}
      {/* <Clock /> */}
      {/* <Parent /> */}
      {/* <Event /> */}
      <Condition />
    </div>
  );
}

export default App;
