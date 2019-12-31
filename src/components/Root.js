import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import List from './List'
import Detail from './Detail'

const Root = () => (
  <BrowserRouter>
    <div className="page-container">
      <Header/>
      <main className="main">
        <Route exact path="/" component={List}/>
        <Route exact path="/:id" component={Detail}/>
      </main>
      <Footer/>
    </div>
  </BrowserRouter>
)

export default Root
