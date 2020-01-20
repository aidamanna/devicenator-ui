import React, { Component } from 'react'
import { logIn } from '../api'
import PropTypes from 'prop-types'

class LogIn extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      isSending: false,
      showErrorMessage: false
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
      .catch(() => this.setState({ isSending: false, showErrorMessage: true }))
  }

  componentDidMount () {
    this.emailInput.focus()
  }

  render () {
    const { email, password, isSending, showErrorMessage } = this.state

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
            { showErrorMessage && <p className="error-msg">Invalid username or password</p> }
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
