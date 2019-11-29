// Code DigitalClicker Component Here

import React, {Component} from 'react';


export default class DigitalClicker extends Component{
    constructor(){
        super()
        this.state = {
            timesClicked: 0,
        }

    }

    increase = () =>{
        console.log(this.state.timesClicked);
        this.setState({timesClicked:this.state.timesClicked+1})
       
    }

    render(){
        return(<button onClick={this.increase}>{this.state.timesClicked}</button>)
    }
    }

