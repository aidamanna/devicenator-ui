import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Item = ({ data }) => (
  <li className="list-item" >
    <Link to={`/${data.imei}`}>
      <strong>{data.model}</strong> - {data.vendor} {data.operatingSystem} {data.operatingSystemVersion}
    </Link>
  </li>
)

Item.propTypes = {
  data: PropTypes.object.isRequired
}

export default Item
