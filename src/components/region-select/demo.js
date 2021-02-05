import React, {Component, Fragment} from 'react'
import RegionSelect from './region-select'
import RegionSelectV2 from './region-select-v2'
import "common/github-markdown.css"

import {provinces} from './provinces.json'

class Demo extends Component {
  state = {
    defaultValue: [1, 11, 111],
  }

  handleRegionChange = value => {
    console.log(value)
  }

  formatProvince = (item) => {
    const formated = item.map(v => {
      let children = []

      if (v.areas || v.cities) {
        children = this.formatProvince(v.areas || v.cities)
      }

      return {
        label: v.name,
        value: v.code,
        children,
      }
    })

    return formated
  }

  render() {
    const { defaultValue } = this.state

    return (<Fragment>
      <div style={{marginBottom: 8}}>Normal</div>

      <RegionSelect
        defaultValue={defaultValue} 
        dataSource={this.formatProvince(provinces)}
        onChange={this.handleRegionChange}
        showSearch
        allowClear
      />

      <div style={{marginBottom: 8}}>v2</div>

      <RegionSelectV2
        defaultValue={defaultValue} 
        dataSource={this.formatProvince(provinces)}
        onChange={this.handleRegionChange}
        showSearch
        allowClear
      />

      <div style={{marginTop: 16}}>markdown 代码区域</div>

      <article 
        className="markdown-body mt20 mb20"
        dangerouslySetInnerHTML={{
          __html: require(`./show.md`),
        }}
      />
    </Fragment>)
  }
}

export default Demo
