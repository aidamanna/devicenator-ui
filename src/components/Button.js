import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ onClick, text }) => (
  <input type="button" onClick={onClick} value={text} className="button"/>
)

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Button
