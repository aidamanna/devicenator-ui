import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import DeleteConfirmation from './DeleteConfirmation'
import { listDevices } from '../api'

class Item extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showDeleteConfirmation: false
    }
    this.handleDeleteConfirmation = this.handleDeleteConfirmation.bind(this)
    this.handleCloseDeleteConfirmation = this.handleCloseDeleteConfirmation.bind(this)
  }

  handleDeleteConfirmation () {
    this.setState({ showDeleteConfirmation: true })
  }

  handleCloseDeleteConfirmation (reload) {
    return () => {
      if (reload) {
        this.setState({ isLoading: true, showAdd: false })
        listDevices().then(data => {
          this.setState({ devices: data, isLoading: false, showDeleteConfirmation: false })
        })
      } else {
        this.setState({ showDeleteConfirmation: false })
      }
    }
  }

  render () {
    const { device } = this.props

    return (<div><li className="list-item" >
      <Link to={`/${device.imei}`}>
        <strong>{device.model}</strong> - {device.vendor} {device.operatingSystem} {device.operatingSystemVersion}
      </Link>
      <div className="icon-buttons-wrapper">
        <button className="icon-button">
          <FontAwesomeIcon icon={faPen}/>
        </button>
        <button className="icon-button" onClick={this.handleDeleteConfirmation}>
          <FontAwesomeIcon icon={faTrashAlt}/>
        </button>
      </div>
    </li>
    { this.state.showDeleteConfirmation &&
        (<DeleteConfirmation imei={device.imei} onClose={this.handleCloseDeleteConfirmation}/>)}
    </div>)
  }
}

Item.propTypes = {
  device: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Item
