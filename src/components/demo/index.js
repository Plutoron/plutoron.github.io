import {Component} from 'react'
import RegionSelect from './region-select'

import {provinces} from './provinces.json'

class Demo extends Component {
  state = {
    value: [1, 11, 111]
  }

  handleRegionChange = value => {
    console.log(value)
  }

  render() {
    const { value } = this.state

    return <RegionSelect
      value={value} 
      dataSource={provinces}
      onChange={this.handleRegionChange}
    />
  }
}
