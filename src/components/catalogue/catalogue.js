import React, {useState, useRef} from 'react'
import {Link} from 'react-router-dom'
import {Pagination} from 'antd'
import {markdown} from 'src/info.json'

const Catalogue = () => {
  const [markdownList, setMarkdownList] = useState(markdown.filter((v, i) => i < 10))

  const {current: store} = useRef({
    current: 1,
    total: markdown.length || 0,
    pageSize: 10,
  })

  return <>
    {
      markdownList.map(({
        title, 
        time, 
        fileName,
      }) => {
        return (<Link
          className="FBH FBJB FBAC pl8 pr8"
          style={{
            borderBottom: '1px solid #f5f5f5',
            height: 45,
          }}
          to={`/detail/${fileName}`}
          key={fileName}
        >
          <div>{title}</div>
          <div>{time}</div>
        </Link>)
      })
    }

    <div className="FBH FBJE mt16">
      <Pagination
        current={store.current}
        total={store.total}
        pageSize={store.pageSize}
        onChange={page => {
          store.current = page
          setMarkdownList(markdown.filter((v, i) => i > store.pageSize * (page - 1) - 1 && i < store.pageSize * page))
        }}
        size="small"
        showTotal={total => `共 ${total} 条`}
      />
    </div>
  </>
}

export default Catalogue
