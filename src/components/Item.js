import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Item = ({ data }) => (
  <li className="list-item" >
    <Link to={`/${data.imei}`}>
      <strong>{data.model}</strong> - {data.vendor} {data.operatingSystem} {data.operatingSystemVersion}
    </Link>
    <div className="icon-buttons-wrapper">
      <button className="icon-button">
        <FontAwesomeIcon icon={faPen}/>
      </button>
      <button className="icon-button">
        <FontAwesomeIcon icon={faTrashAlt}/>
      </button>
    </div>
  </li>
)

Item.propTypes = {
  data: PropTypes.object.isRequired
}

export default Item
