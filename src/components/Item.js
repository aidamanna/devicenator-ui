import React from 'react';
import PropTypes from 'prop-types'

const Item = ({ data }) => (
  <div className="grid-item" >
    <div className="preview-title">{data.model} {data.operatingSystem} {data.operatingSystemVersion}</div>
  </div>
)

Item.propTypes = {
  data: PropTypes.object.isRequired
}

export default Item
