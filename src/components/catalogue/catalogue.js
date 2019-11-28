import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Pagination} from 'antd'
import {markdown} from 'src/info.json'

const Catalogue = () => {
  const [current, setCurrent] = useState(1)
  const [total, setTotal] = useState(markdown.length || 0)
  const [pageSize, setPageSize] = useState(10)
  const [markdownList, setMarkdownList] = useState(markdown.filter((v, i) => i < 10))

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
        current={current}
        total={total}
        pageSize={pageSize}
        onChange={page => {
          setCurrent(page)
          setMarkdownList(markdownList.filter((v, i) => i > pageSize * (page - 1) - 1 && i < pageSize * page))
        }}
        size="small"
        showTotal={total => `共 ${total} 条`}
      />
    </div>
  </>
}

export default Catalogue
