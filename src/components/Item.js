import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import DeleteConfirmation from './DeleteConfirmation'
import Edit from './Edit'
import IconButton from './IconButton'

class Item extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      showEdit: false,
      showDeleteConfirmation: false
    }
    this.handleEdit = this.handleEdit.bind(this)
    this.handleCloseEdit = this.handleCloseEdit.bind(this)
    this.handleDeleteConfirmation = this.handleDeleteConfirmation.bind(this)
    this.handleCloseDeleteConfirmation = this.handleCloseDeleteConfirmation.bind(this)
  }

  handleEdit () {
    this.setState({ showEdit: true })
  }

  handleDeleteConfirmation () {
    this.setState({ showDeleteConfirmation: true })
  }

  handleCloseEdit (reload) {
    const { onRefresh } = this.props

    return () => {
      if (reload) {
        this.setState({ showEdit: false })
        onRefresh()
      } else {
        this.setState({ showEdit: false })
      }
    }
  }

  handleCloseDeleteConfirmation (reload) {
    const { onRefresh } = this.props

    return () => {
      if (reload) {
        this.setState({ showDeleteConfirmation: false })
        onRefresh()
      } else {
        this.setState({ showDeleteConfirmation: false })
      }
    }
  }

  render () {
    const { device } = this.props

    return (<div><li className="list-item" >
      <Link to={`/devices/${device.imei}`}>
        <strong>{device.vendor} {device.model}</strong> - {device.operatingSystem} {device.operatingSystemVersion}
      </Link>
      <div className="icon-buttons-wrapper">
        <IconButton theme="default" onClick={this.handleEdit}>
          <FontAwesomeIcon icon={faPen}/>
        </IconButton>
        <IconButton theme="secondary" onClick={this.handleDeleteConfirmation}>
          <FontAwesomeIcon icon={faTrashAlt}/>
        </IconButton>
      </div>
    </li>
    { this.state.showDeleteConfirmation &&
      (<DeleteConfirmation device={device} onClose={this.handleCloseDeleteConfirmation}/>)}
    { this.state.showEdit &&
      (<Edit device={device} onClose={this.handleCloseEdit}/>)}
    </div>)
  }
}

Item.propTypes = {
  device: PropTypes.object.isRequired,
  onRefresh: PropTypes.func.isRequired
}

export default Item
