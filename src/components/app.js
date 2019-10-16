import React, { Component } from 'react'
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

// 公共头部
import Content from 'mods/content'
import Catalogue from 'mods/catalogue'
import MdReader from 'mods/md-reader'

const App = () => {
  return (
    <Router>
      <Content>
        <Switch>
          <Route 
            exact 
            path={`/index`} 
            component={Catalogue}
          />

          <Route 
            exact 
            path={`/doc/:fileName`} 
            component={MdReader}
          />

          <Redirect to={`/index`} />
        </Switch>
      </Content>
    </Router>
  )
}

export default App