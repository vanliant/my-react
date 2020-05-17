import React from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom' 

export default class Content extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isAuthenticated:window.localStorage.getItem('LOGIN') ? true : false
          }
    }


  componentWillMount(){
    if(!this.state.isAuthenticated){
      const {history} = this.props
        history.replace('/login')
    }
  }

    render(){
        return(
            <div>
                <h2>content页面</h2>
                {
                    this.props.routes.map((v,i)=>{
                        return <Route key={i} path={v.path} component={v.component} exact></Route>
                    })
                }
            </div>
        )
    }
}