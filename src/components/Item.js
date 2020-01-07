import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { deleteDevice } from '../api'

class Item extends Component {
  constructor (props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete (e) {
    e.preventDefault()
    const { device, onDelete } = this.props

    deleteDevice(device.imei).then(onDelete())
  }

  render () {
    const { device } = this.props

    return (<li className="list-item" >
      <Link to={`/${device.imei}`}>
        <strong>{device.model}</strong> - {device.vendor} {device.operatingSystem} {device.operatingSystemVersion}
      </Link>
      <div className="icon-buttons-wrapper">
        <button className="icon-button">
          <FontAwesomeIcon icon={faPen}/>
        </button>
        <button className="icon-button" onClick={this.handleDelete}>
          <FontAwesomeIcon icon={faTrashAlt}/>
        </button>
      </div>
    </li>)
  }
}

Item.propTypes = {
  device: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Item
