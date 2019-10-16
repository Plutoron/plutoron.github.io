import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'

// 这里写 router
const app = document.getElementById('app')
if (app) {
  ReactDOM.render(<App />, document.getElementById('app'))
} else {
  
}
