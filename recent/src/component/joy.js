import React, { Component } from 'react'

class Joy extends Component {
    render() {
        const {name}= this.props
        return <h1>It's a joy full day {name}</h1>
    }
}

export default Joy