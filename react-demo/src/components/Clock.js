import React from 'react'
// import ReactDOM from 'react-dom'

export default class Clock extends React.Component {
    constructor(props) {
        super(props)
        // 状态
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }

    render() {
        return (
            <div>
                <h1>当前时间:{this.state.time}</h1>
            </div>
        )
    }

    // 生命周期函数
    componentDidMount() {
        setInterval(() => {
            this.setState({
                time:new Date().toLocaleTimeString()
            })
            // 直接修改state内容，不会重新修改内容
        }, 1000)
    }
}