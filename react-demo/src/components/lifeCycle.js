import React from 'react'

export default class LifeCycle extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            msg:'hello world'
        }

        console.log('constructor构造函数')
    }

    componentWillMount(){
        console.log('componentWillMount')
    }

    componentDidMount(){
        console.log('componentWillMount')
    }

    componentWillReceiveProps(){
        console.log('componentWillMount')
    }   

    componentWillUpdate(){
        console.log('componentWillMount')
    }

    componentDidUpdate(){
        console.log('componentWillMount')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    render(){
        console.log('render渲染函数')

        return(
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={this.updateState}>数据更新</button>
            </div>
        )
    }

    updateState = () => {
        this.setState({
            msg:'数据更新'
        })
    }

    /*
        生命周期的三个状态
        1.Mounting：将组件插入到Dom中
        2.Updating：将数据更新到Dom中
        3.Unmounting：将组件移除Dom中

        ComponentWillMount
        ComponentDidMount
        ComponentWillReceiveProps
        ShouldComponentUpdate:判断是否更新，返回Boolean
        ComponentWillUpdate
        ComponentDidUpdate
        ComponentWillUnmount
    */ 
}