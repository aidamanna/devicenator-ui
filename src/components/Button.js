import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ onClickAdd, text }) => (
  <input type="button" onClick={onClickAdd} value={text} className="button"/>
)

Button.propTypes = {
  onClickAdd: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Button
