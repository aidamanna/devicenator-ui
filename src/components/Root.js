import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import LogIn from './LogIn'
import List from './List'
import Detail from './Detail'
import PrivateRoute from './PrivateRoute'

const Root = () => (
  <BrowserRouter>
    <div className="page-container">
      <Header/>
      <main className="main">
        <Route exact path="/login" component={LogIn}/>
        <PrivateRoute exact path="/" component={List}/>
        <PrivateRoute exact path="/devices" component={List}/>
        <PrivateRoute exact path="/devices/:id" component={Detail}/>
      </main>
      <Footer/>
    </div>
  </BrowserRouter>
)

export default Root
