import React, { Component } from 'react'
import { logIn } from '../api'
import PropTypes from 'prop-types'

class LogIn extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isSending: false,
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (field) {
    return (event) => {
      this.setState({
        [field]: event.target.value
      })
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    const { email, password } = this.state

    this.setState({ isSending: true })
    logIn(email, password)
      .then(() => this.props.history.push('/devices'))
      .catch(() => this.setState({ isSending: false }))
  }

  componentDidMount () {
    this.emailInput.focus()
  }

  render () {
    const { email, password, isSending } = this.state

    return (<div className="login-container">
      <div className="login-wrapper">
        <div className="login">
          <header className="login-header">
            <img className="login-logo-image" src="logo.png" alt="devicenator logo"/>
            <h2> Welcome back! </h2>
          </header>
          <form className="login-content" >
            <input type="text" value={email} placeholder="Email" onChange={this.handleChange('email')} ref={(input) => { this.emailInput = input }}/>
            <input type="password" value={password} placeholder="Password" onChange={this.handleChange('password')}/>
          </form>
          <footer className="login-footer">
            <input type="submit" value="Log in" onClick={this.handleSubmit} disabled={isSending} className="btn-default-long"/>
          </footer>
        </div>
      </div>
    </div>)
  }
}

LogIn.propTypes = {
  history: PropTypes.object
}

export default LogIn
