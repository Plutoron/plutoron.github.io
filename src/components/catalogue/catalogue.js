import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {markdownList} from 'src/info.json'
import {Pagination} from 'antd'

class Catalogue extends Component {
  constructor(props) {
    super(props)

    this.state = {
      current: 1,
      total: markdownList.length || 0,
      pageSize: 10,
      markdownList: markdownList.filter((v, i) => i < 10),
    }
  }

  onPaginationChange = page => {
    const {
      state: {
        pageSize,
      },
    } = this

    this.setState({
      current: page,
      markdownList: markdownList.filter((v, i) => i > pageSize * (page - 1) - 1 && i < pageSize * page),
    })
  }

  render() {
    const {
      state: {
        current,
        total,
        pageSize,
        markdownList,
      }
    } = this

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
          onChange={this.onPaginationChange}
          size="small"
          showTotal={total => `共 ${total} 条`}
        />
      </div>
    </>
  }
}

export default Catalogue
