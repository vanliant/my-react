import React from 'react'

export default class Content extends React.Component{
    // constructor(props){
    //     super(props)
    // }

    render(){
        return(
            <div>
                <h2>login页面</h2>
                <button onClick={this.login}>登录</button>
                <button onClick={this.outLogin}>退出登录</button>
            </div>
        )
    }

    login = () => {
        localStorage.setItem('LOGIN',true)
        this.props.history.push('/content/home')
    }

    outLogin = () => {
        localStorage.removeItem('LOGIN')
    }
}