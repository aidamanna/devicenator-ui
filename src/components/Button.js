import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
  render () {
    return (<div className="button">{this.props.text}</div>)
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired
}

export default Button
