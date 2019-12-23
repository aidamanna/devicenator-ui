import React, { Component } from 'react'
import Root from './components/Root'
import Header from './components/Header'

class App extends Component {
  render () {
    return (
      <div>
        <Header/>
        <Root/>
      </div>
    )
  }
}

export default App
