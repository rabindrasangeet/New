import React, { Component } from 'react';

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
    
  render() {
    return this.state.isLoggedIn && <div>Weicome Users</div>
    

    /*return (

        this.state.isLoggedIn ? (
        <div>Weicome Users</div>) : (
        <div>Welcome People</div>)
    )*/

    /*let Message
    if(this.state.isLoggedIn){
        Message = <div>Welcome Users</div>
    } else {
        Message = <div>Welcome People</div>
    }
  return <div>{Message}</div>*/
    
  
  /*if (this.state.isLoggedIn){
        return(
            <div>
                Welcome Users
            </div>
        )
    } else {
        return (
            <div>
                Welcome People
            </div>
        )
    }*/
    /*return (
        <div>
      <div>
        Welcome Users
      </div>
      <div>
        Welcome People
      </div>
      </div>
    );*/
  }
}

export default UserGreeting;
