import React, { Component } from 'react'
import Loading from './Loading'
import Item from './Item'
import Button from './Button'
import Add from './Add'
import { listDevices } from '../api'

class List extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: false,
      devices: null,
      showAdd: true
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
      return (<Loading/>)
    }
    return (<React.Fragment>
      <div className="content">
        <header className="content-header">
          <h1>My devices</h1>
          <Button text="Add device"/>
        </header>
        <ul className="list">
          {
            devices && devices.map((device, i) => {
              return (<Item key={i} data={device}/>)
            })
          }
        </ul>
      </div>
      { this.state.showAdd && (<Add onClose={this.handleCloseAdd}/>)}
    </React.Fragment>)
  }
}

export default List
