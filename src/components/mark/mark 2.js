import React, {useState, useRef} from 'react'
import {Pagination} from 'antd'
import Labels from './label'
import Docs from './docs'

const Mark = () => { 
  const {current: store} = useRef({
    current: 1,
    total: 0,
    pageSize: 10,
  })

  return <>
    <Labels />
    <Docs />
  </>
}

export default Mark
