import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {info} from 'src/info.json'
import {Pagination} from 'antd'

class Catalogue extends Component {
  constructor(props) {
    super(props)

    const list = JSON.parse(info || [])

    this.state = {
      current: 1,
      total: list.length || 0,
      pageSize: 10,
      list,
    }
  }

  onPaginationChange = page => {
    this.setState({
      current: page,
    })
  }

  render() {
    const {
      state: {
        current,
        total,
        pageSize,
        list,
      }
    } = this

    return <div>
      {
        list.map(({
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
          >
            <div>标题：{title}</div>
            <div>时间：{time}</div>
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
    </div>
  }
}

export default Catalogue