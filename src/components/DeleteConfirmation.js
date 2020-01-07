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
    const { imei, onClose } = this.props

    deleteDevice(imei).then(onClose(true))
  }

  render () {
    const { isDeleting } = this.state
    const { onClose } = this.props

    return (<div className="modal-container">
      <div className='modal-wrapper'>
        <div className="modal">
          <header className="modal-header">
            <h2>Confirm device deletion</h2>
            <span className="close" onClick={onClose(false)}>&times;</span>
          </header>
          <div className="modal-content">
            <p>Are you sure you want to delete the device?</p>
          </div>
          <footer className="modal-footer">
            <Button text="Cancel" onClick={onClose(false)}/>
            <Button text="Delete" onClick={this.handleDelete} disabled={isDeleting}/>
          </footer>
        </div>
      </div>
    </div>)
  }
}

DeleteConfirmation.propTypes = {
  onClose: PropTypes.func.isRequired,
  imei: PropTypes.string.isRequired
}

export default DeleteConfirmation
