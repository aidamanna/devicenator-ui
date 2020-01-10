import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => (
  <input type="button" onClick={props.onClick} value={props.children} className={'btn-' + props.theme}/>
)

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

export default React.memo(Button)
