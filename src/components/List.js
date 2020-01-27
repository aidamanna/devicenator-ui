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
      showAdd: false
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.handleCloseAdd = this.handleCloseAdd.bind(this)
    this.handleRefreshList = this.handleRefreshList.bind(this)
  }

  componentDidMount () {
    this.setState({ isLoading: true })

    listDevices().then(devices => {
      this.setState({ isLoading: false, devices: devices.data })
    })
  }

  handleAdd (e) {
    e.preventDefault()
    this.setState({ showAdd: true })
  }

  handleCloseAdd (reload) {
    return () => {
      if (reload) {
        this.setState({ isLoading: true, showAdd: false })
        listDevices().then(devices => {
          this.setState({ devices: devices.data, isLoading: false, showAdd: false })
        })
      } else {
        this.setState({ showAdd: false })
      }
    }
  }

  handleRefreshList () {
    return () => {
      this.setState({ isLoading: true })
      listDevices().then(devices => {
        this.setState({ devices: devices.data, isLoading: false })
      })
    }
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
          <Button theme="default" onClick={this.handleAdd}>Add device</Button>
        </header>
        <ul className="list">
          {
            devices &&
            devices.sort((a, b) => (a.vendor.toLowerCase() > b.vendor.toLowerCase()) ? 1 : (a.vendor.toLowerCase() === b.vendor.toLowerCase()) ? ((a.model.toLowerCase() > b.model.toLowerCase()) ? 1 : -1) : -1)
              .map((device, i) => {
                return (<Item key={i} device={device} onRefresh={this.handleRefreshList()}/>)
              })
          }
        </ul>
      </div>
      { this.state.showAdd && (<Add onClose={this.handleCloseAdd}/>)}
    </React.Fragment>)
  }
}

export default List
