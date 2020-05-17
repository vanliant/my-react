import React from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom' 

export default class Content extends React.Component{
    constructor(props){
        super(props);
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