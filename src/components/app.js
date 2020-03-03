import React, { Component } from 'react'
import {
  HashRouter as Router,
  // BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

// 公共头部
import Content from 'mods/content'
import Catalogue from 'mods/catalogue'
import MdReader from 'mods/md-reader'
import RegionSelect from 'mods/region-select'
import Mark from 'mods/mark'
import ReactPDF from 'mods/react-pdf'

const App = () => {
  return (
    <Router>
      <Content>
        <Switch>
          <Route 
            exact 
            path={`/`} 
            component={Catalogue}
          />

          <Route 
            exact 
            path={`/detail/:fileName`} 
            component={MdReader}
          />

          <Route 
            exact
            path={'/region-select'}
            component={RegionSelect}
          />

          <Route 
            exact
            path={'/mark'}
            component={Mark}
          />

          <Route 
            exact
            path={'/react-pdf'}
            component={ReactPDF}
          />  

          <Redirect from={'*'} to={`/`} />
        </Switch>
      </Content>
    </Router>
  )
}

export default App
