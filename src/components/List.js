import React, { Component } from 'react'
import Loading from './Loading'
import Item from './Item'
import { listDevices } from '../api'

class List extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: false,
      devices: null
    }
  }

  componentDidMount () {
    this.setState({ isLoading: true })

    listDevices().then(data => {
      this.setState({ isLoading: false, devices: data })
    })
  }

  render () {
    const { devices, isLoading } = this.state
    if (isLoading || !devices) {
      return (<Loading message="Loading ..."/>)
    }
    return (<React.Fragment>
      <div className="content">
        <div className="list">
          {
            devices && devices.map((device, i) => {
              return (<Item key={i} data={device}/>)
            })
          }
        </div>
      </div>
    </React.Fragment>)
  }
}

export default List
