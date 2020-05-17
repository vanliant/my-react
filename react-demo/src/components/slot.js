import React from 'react'

export default class Slot extends React.Component{
    // constructor(props){
    //     super(props)
    // }

    render(){
        return(
            <div>
                <h1>插槽</h1>
                {this.props.children}
            </div>
        )
    }
}