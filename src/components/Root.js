import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import List from './List'
import Detail from './Detail'

const Root = () => (
  <BrowserRouter>
    <div className="page-container">
      <Navbar/>
      <div className="content-wrapper">
        <Route exact path="/" component={List}/>
        <Route exact path="/:id" component={Detail}/>
      </div>
      <Footer/>
    </div>
  </BrowserRouter>
)

export default Root
