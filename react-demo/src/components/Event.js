import React from 'react'

export default class Event extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    // 1.绑定事件的命名，驼峰命名法
    // 2.用{}传入一个函数
    render(){
        return (
            <div>
                <div>React中的事件</div>
                <button onClick={this.click}>click</button>
                <br />
                <button onClick={(e) => {this.sendParams('参数1',e)}}>传参</button>
            </div>
        )
    }

    click = (e) => {
        // 阻止默认，必须使用e.preventDefault()
        e.preventDefault()
        console.log(e)
    }

    sendParams = (msg,e) => {
        // 阻止默认，必须使用e.preventDefault()
        e.preventDefault()
        console.log(msg,e)
    }
}