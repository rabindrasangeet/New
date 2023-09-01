import React, { Component } from 'react';

export class Thisclick extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message:"Hello"
      }
      this.clickHandler = this.clickHandler.bind(this)
    }
     
    clickHandler(){
        this.setState({
            message:"Well done"
        })
        console.log(this)
    }

   render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.clickHandler.bind(this)}>Click</button>
      </div>
    );
  }
}

export default Thisclick;
