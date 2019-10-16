import * as React from 'react'
import {github} from 'common/config'
import './header.styl'

import {Icon} from 'antd'

const header = () => {
  return <div className="header FBH FBJA FBAC">
    <a 
      className="fc0"
      href="https://suyunlongsy.github.io/"
    >
      suyunlongsy.github.io
    </a>

    <span>江山</span>

    <Icon type="woman" />
  
    <a 
      className="header-follow-button FBH fc0" 
      href={github} 
    >
      <Icon type="github" />
    </a> 
  </div>
}

export default header