import React from 'react'
import PropTypes from 'prop-types'

const Item = ({ data }) => (
  <div className="list-item" >
    <div className="list-item-title">
      {data.model} - {data.vendor} {data.operatingSystem} {data.operatingSystemVersion}
    </div>
  </div>
)

Item.propTypes = {
  data: PropTypes.object.isRequired
}

export default Item
