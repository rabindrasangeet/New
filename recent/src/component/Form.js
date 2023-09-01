import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           username : '',
           comments : '',
           Topic : "React"
        }
      }

      handleSubmit = event =>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.Topic}`)
        event.preventDefault()
      }

      handleuserNameChange = event =>{
        this.setState({
            username : event.target.value
        })
      }

      handleCommentsChange = event =>{
        this.setState({
            comments: event.target.value
        })
      }


      handleTopicChange = event => {
        this.setState({
          Topic : event.target.value
        })
      }

 render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <label>userName:</label>
            <input type="text" value={this.state.username} onChange={this.handleuserNameChange}/>
        </div>
        <div>
            <label>Comments</label>
            <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value = {this.state.Topic} onChange={this.handleTopicChange}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Laravel">Laravel</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
