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
        return (<a
          className="FBH FBJB FBAC pl8 pr8"
          style={{
            borderBottom: '1px solid #f5f5f5',
            height: 45,
          }}
          // to={`/detail/${fileName}`}
          key={fileName}
          onClick={() => window.open(`/#/detail/${fileName}`)}
        >
          <div>{title}</div>
          {/* <div>{time}</div> */}
        </a>)
      })
    }

    <div className="FBH FBJE mt16">
      <Pagination
        total={store.total}
        defaultPageSize={10}
        current={store.current}
        onShowSizeChange={(current, size) => {
          store.current = 1
          store.pageSize = size

          setMarkdownList(markdown.filter((v, i) => i > store.pageSize * (store.current - 1) - 1 && i < store.pageSize * store.current))
        }}
        onChange={(page, pageSize) => {      
          store.current = page
    
          setMarkdownList(markdown.filter((v, i) => i > store.pageSize * (store.current - 1) - 1 && i < store.pageSize * store.current))
        }}
        size="small"
        showTotal={total => `共 ${total} 条`}
      />
    </div>
  </>
}

export default Catalogue
