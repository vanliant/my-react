import React from 'react';

// import logo from './logo.svg';
// import './App.css';

// 路由
// hash 
// import {HashRouter as Router,Link,Router} from 'react-router-dom'
// histort
import { BrowserRouter as Router, Link, Route, Switch, Redirect, } from 'react-router-dom'

// import Weather from './components/Weather'
// import Clock from './components/Clock'
// import Parent from './components/parentComponent/Parent'
// import Event from './components/Event'
// import Condition from './components/conditionRender/index'
// import ListRender from './components/listRender/index'
// import LifeCycle from './components/lifeCycle'
// import Slot from './components/slot'

import routes from './router/router'

// function App() {
//   return (
//     <div className="App">
//       {/* <Weather weather='下雨'/> */}
//       {/* <Clock /> */}
//       {/* <Parent /> */}
//       {/* <Event /> */}
//       {/* <Condition /> */}
//       {/* <ListRender /> */}
//       {/* <LifeCycle /> */}
//       {/* <Slot>
//         <h2>子组件1</h2>
//         <h2>子组件2</h2>
//         <h2>子组件3</h2>
//       </Slot> */}
//     </div>
//   );
// }


// import Login from './pages/login'
class App extends React.Component {

  setRoute = (routes) => {
    return routes.map((v, i) => {
      if (v.exact) {
        return <Route key={i} exact path={v.path}
          render={props => (
            <v.component {...props} routes={v.children} />
          )} />
      } else {
        return <Route key={i} path={v.path}
          render={props => (
            <v.component {...props} routes={v.children} />
          )} />
      }
    })
  }

  render() {
    console.log('dddddd')
    this.setRoute(routes)
    return (
      
      <div className='App'>
        <Router>
          <Switch>
            {
              this.setRoute(routes)
            }
            <Redirect from='/*' to='/login'></Redirect>
          </Switch>
          
        </Router>
      </div>
    )
  }
}

export default App;
