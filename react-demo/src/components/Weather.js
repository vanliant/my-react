import React from 'react'
import ReactDOM from 'react-dom'

// 函数式组件
// function Weather(props){
//     console.log('函数式组件',props)
//     return(
//         <div>
//             <h1>我是函数式组件</h1>
//         </div>
//     )
// }

// 类组件
class Weather extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('类组件',this.props)
        return (
            <div>
                <h1>我是类组件</h1>
            </div>
        )
    }
}

// 类组件和函数式组件区别
// 类组件用于静态，没有交互事件的内容，没有声明周期，没有状态

// 复合组件，组件中嵌套组件
export default Weather