import React from 'react'
import Child from './Child'

export default class Parent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isActive: true,
            num: 0
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.changeShow}>控制子元素显示</button>
                <div>获取子元素传递的值：{this.state.num}</div>
                <Child isActive={this.state.isActive} setNum={this.setNum} num={this.state.num}/>
            </div>
        )
    }

    changeShow = () => {
        this.setState({
            isActive: !this.state.isActive
        })
    }

    setNum = (data) => {
        this.setState({
            num:data
        })
    }
}