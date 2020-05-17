import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// import Weather from './components/Weather'
// import Clock from './components/Clock'
// import Parent from './components/parentComponent/Parent'
// import Event from './components/Event'
// import Condition from './components/conditionRender/index'
// import ListRender from './components/listRender/index'
// import LifeCycle from './components/lifeCycle'
import Slot from './components/slot'

function App() {
  return (
    <div className="App">
      {/* <Weather weather='下雨'/> */}
      {/* <Clock /> */}
      {/* <Parent /> */}
      {/* <Event /> */}
      {/* <Condition /> */}
      {/* <ListRender /> */}
      {/* <LifeCycle /> */}
      <Slot>
        <h2>子组件1</h2>
        <h2>子组件2</h2>
        <h2>子组件3</h2>
      </Slot>
    </div>
  );
}

export default App;
