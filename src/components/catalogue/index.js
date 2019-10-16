import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {info} from 'src/info.json'
import {Pagination} from 'antd'

class Catalogue extends Component {
  constructor(props) {
    super(props)

    const list = JSON.parse(info || [])

    this.state = {
      current: 0,
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
            to={`/doc/${fileName}`}
          >
            <div>{title}</div>
            <div>{time}</div>
          </Link>)
        })
      }
  
      <div className="FBH FBJE">
        <Pagination
          current={current}
          total={total}
          pageSize={pageSize}
          onChange={this.onPaginationChange}
          size="small"
        />
      </div>
    </div>
  }
}

export default Catalogue
