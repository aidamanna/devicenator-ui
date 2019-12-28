import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Navbar'
import List from './List'
import Detail from './Detail'

const Root = () => (
  <BrowserRouter>
    <div>
      <Navbar/>
      <Route exact path="/" component={List}/>
      <Route exact path="/:id" component={Detail}/>
    </div>
  </BrowserRouter>
)

export default Root
