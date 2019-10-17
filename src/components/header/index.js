import * as React from 'react'
import {github} from 'common/config'
import {Link} from 'react-router-dom'
import './header.styl'

import {Icon} from 'antd'

const header = () => {
  return <div className="header FBH FBJA FBAC">
    <Link 
      className="fc0"
      to={'/'}
    >
      suyunlongsy.github.io
    </Link>

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