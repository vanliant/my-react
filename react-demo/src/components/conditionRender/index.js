import React from 'react'

import Login from './Login'
import Hello from './Hello'

export default class Condition extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isLogin:true
        }
    }

    render(){
        // 条件渲染
        // 1.直接通过条件运算
        // return this.state.isLogin ? <Hello /> : <Login />


        // 2.通过条件运算得到jsx对象
        let ele = null
        ele = this.state.isLogin ? <Hello /> : <Login />
        return (
            <div>
                <h1>aa</h1>
                {ele}
            </div>
        )
    }
}