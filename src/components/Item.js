import React from 'react'
import PropTypes from 'prop-types'

const Item = ({ data }) => (
  <div className="list-item" >
    {data.model} - {data.vendor} {data.operatingSystem} {data.operatingSystemVersion}
  </div>
)

Item.propTypes = {
  data: PropTypes.object.isRequired
}

export default Item
