import React, { Component } from 'react'
import Loading from './Loading'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import { getDevice } from '../api'

class Detail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: false,
      device: null
    }
  }

  componentDidMount () {
    this.setState({ isLoading: true })

    getDevice(this.props.match.params.id).then(data => {
      this.setState({ isLoading: false, device: data })
    })
  }

  render () {
    const { device, isLoading } = this.state
    if (isLoading || !device) {
      return (<Loading/>)
    }

    return (<React.Fragment>
      <div className="content">
        <header className="content-header">
          <h1>{device.vendor} {device.model}</h1>
        </header>
        <div className="detail">
          <div className="detail-text">
            <p><strong>Imei:</strong> {device.imei}</p>
            <p><strong>Vendor:</strong> {device.vendor}</p>
            <p><strong>Model:</strong> {device.model}</p>
            <p><strong>Operating system:</strong> {device.operatingSystem} {device.operatingSystemVersion}</p>
          </div>
        </div>
      </div>
    </React.Fragment>)
  }
}

Detail.propTypes = {
  match: PropTypes.object.isRequired
}

export default withRouter(Detail)
