import React from 'react'

export default class Child extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let strClass = this.props.isActive ? ' active' : '';
        return (
            <div className={'content' + strClass}>
                子元素
                <button onClick={this.changeData}>修改父元素的数据</button>
            </div>
        )
    }

    changeData = () => {
        let curNum = this.props.num
        this.props.setNum(++curNum)
    }
}