import React, { Component } from 'react'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'

class Detail extends Component {
  render () {
    return (
      <React.Fragment>
        <div className="content">
          <div className="detail">
            <div className="detail-text">Device imei: {this.props.match.params.id}</div>
          </div>
        </div>
      </React.Fragment>)
  }
}

Detail.propTypes = {
  match: PropTypes.object.isRequired
}

export default withRouter(Detail)
