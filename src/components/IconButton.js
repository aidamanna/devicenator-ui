import React from 'react'
import PropTypes from 'prop-types'

const IconButton = (props) => (
  <button className={'icon-btn-' + props.theme} onClick={props.onClick}>
    {props.children}
  </button>
)

IconButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired
}

export default React.memo(IconButton)
