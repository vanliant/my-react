import React from 'react'
import Child from './Child'

export default class Parent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isActive: true
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.changeShow}>控制子元素显示</button>
                <Child isActive={this.state.isActive} />
            </div>
        )
    }

    changeShow = () => {
        this.setState({
            isActive: !this.state.isActive
        })

    }
}