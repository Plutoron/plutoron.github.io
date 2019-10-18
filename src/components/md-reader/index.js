import * as React from 'react'
import {useParams} from 'react-router-dom'
import "common/github-markdown.css"

const MdReader = () => {
  console.log(useParams())
  const {
    fileName,
  } = useParams()

  return <article 
    className="markdown-body mt20 mb20"
    dangerouslySetInnerHTML={{
      __html: require(`markdowns/${fileName}`),
    }}
  />
}

export default MdReader