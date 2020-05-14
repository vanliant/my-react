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
            </div>
        )
    }
}