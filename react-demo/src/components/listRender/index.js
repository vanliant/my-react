import React from 'react'


export default class List extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            list:[
                {title:'第一节课',content:'aa'},
                {title:'第二节课',content:'bb'},
                {title:'第三节课',content:'cc'},
                {title:'第四节课',content:'dd'},
            ]
        }
    }

    render(){
        return (
            <div>
                {
                    this.state.list.map((item,index)=>{
                        return (
                            <li key={index}>
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                            </li>
                        )
                    })
                }
            </div>
        )
    }
}