import React, { Component } from 'react'
import { updateDevice } from '../api'
import PropTypes from 'prop-types'
import Button from './Button'

class Edit extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isSending: false,
      operatingSystemVersion: props.device.operatingSystemVersion
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
    const { device, onClose } = this.props

    this.setState({ isSending: true })
    updateDevice(
      device.imei,
      { operatingSystemVersion: this.state.operatingSystemVersion }
    ).then(onClose(true))
  }

  componentDidMount () {
    this.operatingSystemVersionInput.focus()
  }

  render () {
    const { isSending, operatingSystemVersion } = this.state
    const { device, onClose } = this.props

    return (<div className="modal-container">
      <div className="modal-wrapper">
        <div className="modal">
          <header className="modal-header">
            <h2>Update <strong>{device.vendor} {device.model}</strong> device</h2>
            <span className="close" onClick={onClose(false)}>&times;</span>
          </header>
          <form className="modal-content" >
            <label htmlFor="name">Operating system version</label>
            <input type="text" id="name" value={operatingSystemVersion} onChange={this.handleChange('operatingSystemVersion')} ref={(input) => { this.operatingSystemVersionInput = input }}/>
          </form>
          <footer className="modal-footer">
            <Button theme="primary" onClick={onClose(false)}>Cancel</Button>
            <input type="submit" value="Update device" onClick={this.handleSubmit} disabled={isSending} className="btn-default"/>
          </footer>
        </div>
      </div>
    </div>)
  }
}

Edit.propTypes = {
  onClose: PropTypes.func.isRequired,
  device: PropTypes.object.isRequired
}

export default Edit
