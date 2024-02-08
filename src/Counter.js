import React, { Component } from 'react'

export class Counter extends Component {
    constructor(){
        super()
        this.state={
            counter: 0
        }

    }
    increament(){
        this.setState({
           counter: this.state.counter + 1 
        })
    }
  render() {
    return (
      <div>
        <div>count-{this.state.counter}</div>
        <button onClick={()=>this.increament()}>Increment</button>
      </div>
    )
  }
}

export default Counter
