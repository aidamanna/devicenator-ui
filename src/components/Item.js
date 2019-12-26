import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Item = ({ data }) => (
  <Link className="list-item-link" to={`/${data.imei}`}>
    <div className="list-item" >
      <strong>{data.model}</strong> - {data.vendor} {data.operatingSystem} {data.operatingSystemVersion}
    </div>
  </Link>
)

Item.propTypes = {
  data: PropTypes.object.isRequired
}

export default Item
