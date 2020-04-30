import React, { Suspense, lazy } from 'react'
import {
  HashRouter as Router,
  // BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { Spin } from 'antd'

// 公共头部
import Content from 'mods/content'

const Catalogue = lazy(() => import('mods/catalogue'))
const MdReader = lazy(() => import('mods/md-reader'))
const RegionSelect = lazy(() => import('mods/region-select'))
const Mark = lazy(() => import('mods/mark'))
const ReactPDF = lazy(() => import('mods/react-pdf'))

const App = () => {
  return (
    <Suspense fallback={<div style={{marginTop: 120, textAlign: 'center'}}><Spin size="small" spinning tip="页面加载中" delay={500} /></div>}>
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
    </Suspense>
  )
}

export default App
