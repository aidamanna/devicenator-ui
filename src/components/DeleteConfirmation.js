import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { deleteDevice } from '../api'

class DeleteConfirmation extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isDeleting: false
    }
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete (e) {
    e.preventDefault()
    const { device, onClose } = this.props

    deleteDevice(device.imei).then(onClose(true))
  }

  render () {
    const { isDeleting } = this.state
    const { device, onClose } = this.props

    return (<div className="modal-container">
      <div className='modal-wrapper'>
        <div className="modal">
          <header className="modal-header">
            <h2>Confirm device deletion</h2>
            <span className="close" onClick={onClose(false)}>&times;</span>
          </header>
          <div className="modal-content">
            <p>Are you sure you want to delete the device <strong>{device.vendor} {device.model}</strong>?</p>
          </div>
          <footer className="modal-footer">
            <Button theme="primary" onClick={onClose(false)}>Cancel</Button>
            <Button theme="secondary" onClick={this.handleDelete} disabled={isDeleting}>Delete</Button>
          </footer>
        </div>
      </div>
    </div>)
  }
}

DeleteConfirmation.propTypes = {
  onClose: PropTypes.func.isRequired,
  device: PropTypes.object.isRequired
}

export default DeleteConfirmation
