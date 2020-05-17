import React from 'react'
import { connect } from 'react-redux'



class ContentHome extends React.Component{
    render(){
        const { add, reduce } = this.props;
        return(
            <div>
                <h1>Redux的使用:{this.props.num}</h1>
                <button onClick={add}>++</button>
                <button onClick={reduce}>--</button>
            </div>
        )
    }
}

//需要渲染什么数据
function mapStateToProps(state) {
    return {
      num: state
    }
  }
  //需要触发什么行为
  function mapDispatchToProps(dispatch) {
    return {
      add: () => dispatch({ type: 'ADD' }),
      reduce: () => dispatch({ type: 'REDUCE' })
    }
}

export default ContentHome = connect(mapStateToProps,mapDispatchToProps)(ContentHome)