import * as React from 'react'
import {github} from 'common/config'
import {Link} from 'react-router-dom'

import {FireFilled, HighlightFilled, HeartFilled, GithubFilled} from '@ant-design/icons'

const header = () => {
  return <div className="header FBH FBJA FBAC">
    <Link 
      className="fc0"
      to={'/'}
    >
      suyunlongsy.github.io
    </Link>

    
    {/* 动画todo */}

    <span><HighlightFilled className="fs14" /></span>
    
    <span><FireFilled className="fs14" /></span>
    
    <span><HeartFilled className="fs14" /></span>
  
    <a 
      className="header-follow-button FBH fc0" 
      href={github} 
    >
      <GithubFilled />
    </a> 
  </div>
}

export default header