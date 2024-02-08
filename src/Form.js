import React, { Component } from 'react'

 class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username : '',
         comments: '',
         topic : 'react'
      }
    }
    handleUsernameChange = (event)=>{
        this.setState({
            username: event.target.value
        })
    }
    handleCommentsChange = (event)=>{
        this.setState({
            comments : event.target.value
        })
    }
    handleSelectChange = (event)=>{
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = (event)=>{
        alert(`username ${this.state.username} ,comment: ${this.state.comments} ,Topic: ${this.state.topic}` )
        event.preventDefault()
    }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
      <div>
        <label>Username:</label>
        <input type='text' value={this.state.username} onChange={this.handleUsernameChange}></input>
      </div>
      <div>
        <label >Comments:</label>
        <textarea name="" id="" cols="10" rows="5" value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
      </div>
      <div>
        <label >Topic</label>
            <select value={this.state.topic} onChange={this.handleSelectChange}>
                <option value="React">React</option>
                <option value="Angular">Angular</option>
                <option value="Vue">vue</option>
            </select>
        
      </div>
      <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form
