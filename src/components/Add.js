import React, { Component } from 'react'
import { addDevice } from '../api'
import PropTypes from 'prop-types'
import Button from './Button'

class Add extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isSending: false,
      imei: '',
      model: '',
      vendor: '',
      operatingSystem: '',
      operatingSystemVersion: ''
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
    const { onClose } = this.props

    this.setState({ isSending: true })
    addDevice({
      imei: this.state.imei,
      model: this.state.model,
      vendor: this.state.vendor,
      operatingSystem: this.state.operatingSystem,
      operatingSystemVersion: this.state.operatingSystemVersion
    }).then(onClose(true))
  }

  render () {
    const { isSending, imei, model, vendor, operatingSystem, operatingSystemVersion } = this.state
    const { onClose } = this.props

    return (<div className="modal-container">
      <div className="modal-wrapper">
        <div className="modal">
          <header className="modal-header">
            <h2> Add new device </h2>
            <span className="close" onClick={onClose(false)}>&times;</span>
          </header>
          <form className="modal-content" >
            <input type="text" value={imei} placeholder="Imei" onChange={this.handleChange('imei')}/>
            <input type="text" value={model} placeholder="Model" onChange={this.handleChange('model')}/>
            <input type="text" value={vendor}placeholder="Vendor" onChange={this.handleChange('vendor')}/>
            <input type="text" value={operatingSystem}placeholder="Operating system" onChange={this.handleChange('operatingSystem')}/>
            <input type="text" value={operatingSystemVersion}placeholder="Operating system version" onChange={this.handleChange('operatingSystemVersion')}/>
          </form>
          <footer className="modal-footer">
            <Button text="Cancel" type="input" onClick={onClose(false)}/>
            <input type="submit" value="Add device" onClick={this.handleSubmit} disabled={isSending} className="button"/>
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
