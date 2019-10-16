import * as React from 'react'
import {withRouter} from 'react-router-dom'
import Header from 'mods/header'
import MdReader from 'mods/md-reader'

// 样式
import 'common/flexbox.css'
import 'common/common.styl'

const Content = ({children}) => {
  return <div>
    <Header />
    <div className="io-content pl30 pr30 pt20">
      {children}
    </div>
  </div>
}

export default withRouter(Content)
