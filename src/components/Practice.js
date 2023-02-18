import React, { Component } from 'react'

export default class Practice extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"Dinesh",
            id:3,
        };
        console.log("this is constructor called...!");
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({name:"karthik"})
        },3000)
        console.log("componentDidMount is called");
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate method  called... to check (nextProps, nextState)!");
        return true ;
    }
    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate method called.. to check  (prevProps, prevState)  ")
    }
    // componentWillUnmount(){
    //     console.log(" componentWillUnmount method called...!");
    // }
  render() {
    return (
      <div>
        <h1> person Details</h1>
        <h2>person name:{this.state.name}</h2>
      </div>
    )
  }
}
