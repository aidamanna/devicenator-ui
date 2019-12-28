import React, { Component } from 'react'
import Root from './components/Root'
import Navbar from './components/Navbar'

class App extends Component {
  render () {
    return (
      <div>
        <Navbar/>
        <Root/>
      </div>
    )
  }
}

export default App
