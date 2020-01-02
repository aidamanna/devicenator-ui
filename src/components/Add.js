import React, { Component } from 'react'
import { addDevice } from '../api'
import PropTypes from 'prop-types'
import Button from './Button'

class Add extends Component {
  render () {
    const { onClose } = this.props
    return (<div className="modal-container">
      <div className="modal-wrapper">
        <div className="modal">
          <header className="modal-header">
            <h2> Add new device </h2>
            <span className="close" onClick={onClose(false)}>&times;</span>
          </header>
          <div className="modal-content">This is content</div>
          <footer className="modal-footer">
            <Button text="Add device" onClick={onClose(true)}/>
            <Button text="Cancel" onClick={onClose(false)}/>
          </footer>
        </div>
      </div>
    </div>)
  }
}

Add.propTypes = {
  onClose: PropTypes.func.isRequired
}
export default Add
