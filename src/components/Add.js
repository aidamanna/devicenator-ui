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
          <form className="modal-content" >
            <input type="text" placeholder="Imei"/>
            <input type="text" placeholder="Model"/>
            <input type="text" placeholder="Operating system"/>
            <input type="text" placeholder="Operating system version"/>
            <input type="text" placeholder="Vendor"/>
          </form>
          <footer className="modal-footer">
            <Button text="Cancel" onClick={onClose(false)}/>
            <Button text="Add device" onClick={onClose(true)}/>
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
