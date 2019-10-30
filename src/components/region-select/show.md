#### 目录结构
  - demo.js
  - province.json
  - region-select.js
  - region-select-v2.js
  - region-select-v2-item.js

##### demo.js
```
import {Component, Fragment} from 'react'
import RegionSelect from './region-select'
import RegionSelectV2 from './region-select-v2'

import {provinces} from './provinces.json'

class Demo extends Component {
  state = {
    value: [1, 11, 111],
  }

  handleRegionChange = value => {
    console.log(value)
  }
 
  // format 数据格式 为 antd 通用的 数据格式
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
    const { value } = this.state

    return (<Fragment>
      <div>Normal</div>
      
      <RegionSelect
        defaultValue={value} 
        dataSource={this.formatProvince(provinces)}
        onChange={this.handleRegionChange}
        showSearch
        allowClear
      />

      <div>v2</div>

      <RegionSelectV2
        defaultValue={value} 
        dataSource={this.formatProvince(provinces)}
        onChange={this.handleRegionChange}
        showSearch
        allowClear
      />
    </Fragment>)
  }
}

export default Demo
```
##### region-select.js
```
import React, {Component} from 'react'
import {Select} from 'antd'

const {Option} = Select

class RegionSelect extends Component {
  state = {
    value: this.props.defaultValue,
    provinceList: [],
    cityList: [],
    areaList: [],
    loading: false,
  }

  componentDidMount() {
    this.getLists()
  }

  getLists = () => {
    const {
      props: {dataSource},
      state: {value},
    } = this

    this.setState({
      loading: true
    })

    const provinceList = [...dataSource]

    const curProvince = dataSource.filter(v => v.value === value[0])

    const cityList = curProvince.length > 0 ? (curProvince[0].children || []) : []

    const areaList = cityList.length > 0 ? (cityList[0].children || []) : []

    this.setState({
      provinceList,
      cityList,
      areaList,
      loading: false,
    })
  }

  onProvinceChange = (provinceCode, extra) => {
    const {
      props: {onChange},
    } = this

    const value = [provinceCode, undefined, undefined]
    
    this.setState({
      cityList: extra ? extra.props.data : [],
      areaList: [],
      value,
    })

    onChange(value)
  }

  onCityChange = (cityCode, extra) => {
    const {
      props: {onChange},
      state: {value},
    } = this

    value[1] = cityCode
    value[2] = undefined

    this.setState({
      areaList: extra ? extra.props.data : [],
      value,
    })

    onChange(value)
  }

  onAreaChange = (areaCode, extra) => {
    const {
      props: {onChange},
      state: {value},
    } = this

    value[2] = areaCode

    this.setState({
      value,
    })

    onChange(value)
  }

  render() {
    const {
      props: {
        showSearch,
        allowClear,
      },
      state: {
        provinceList,
        cityList,
        areaList,
        value,
        loading,
      },
    } = this

    if (loading) return <div>加载中</div>

    return (
      <div style={{display: 'flex'}}>
        <div>
          省：
          <Select 
            value={value[0]} 
            style={{minWidth: 100, marginRight: 8}} 
            onChange={this.onProvinceChange}
            showSearch={showSearch}
            allowClear={allowClear}
            placeholder="请选择"
            notFoundContent={'暂无数据'}
            optionFilterProp={'children'}
          >
            {
              provinceList.map(v => <Option value={v.value} data={v.children}>{v.label}</Option>)
            }
          </Select>
        </div>
        <div>
          市：
          <Select 
            value={value[1]} 
            style={{minWidth: 100, marginRight: 8}} 
            onChange={this.onCityChange} 
            showSearch={showSearch}
            allowClear={allowClear}
            placeholder="请选择"
            notFoundContent={'请先选择省'}
            optionFilterProp={'children'}
          >
            {
              cityList.map(v => <Option value={v.value} data={v.children}>{v.label}</Option>)
            }
          </Select>
        </div>
        <div>
          区：
          <Select 
            value={value[2]} 
            style={{minWidth: 100}} 
            onChange={this.onAreaChange} 
            showSearch={showSearch}
            allowClear={allowClear}
            placeholder="请选择"
            notFoundContent={'请先选择市'}
            optionFilterProp={'children'}
          >
            {
              areaList.map(v => <Option value={v.value}>{v.label}</Option>)
            }
          </Select>
        </div>
      </div>
    )
  }
}

export default RegionSelect
```
##### region-select-v2.js
```
import React, {Component} from 'react'
import RegionSelectItem from './region-select-v2-item'

class RegionSelectV2 extends Component {
  ... // 和上面的一样
  ...

  render() {
    const {
      props: {
        showSearch,
        allowClear,
      },
      state: {
        provinceList,
        cityList,
        areaList,
        value,
        loading,
      },
    } = this

    if (loading) return <div>加载中</div>

    return (
      <div style={{display: 'flex'}}>
        <div>
          <RegionSelectItem 
            label={'省'}
            separator={'：'}
            value={value[0]} 
            style={{minWidth: 100, marginRight: 8}} 
            onChange={this.onProvinceChange}
            showSearch={showSearch}
            allowClear={allowClear}
            placeholder="请选择"
            notFoundContent={'暂无数据'}
            optionFilterProp={'children'}
            options={provinceList}
          />
        </div>
        <div>
          <RegionSelectItem 
            label={'市'}
            separator={'：'}
            value={value[1]} 
            style={{minWidth: 100, marginRight: 8}} 
            onChange={this.onCityChange} 
            showSearch={showSearch}
            allowClear={allowClear}
            placeholder="请选择"
            notFoundContent={'请先选择省'}
            optionFilterProp={'children'}
            options={cityList}
          />
        </div>
        <div>
          <RegionSelectItem 
            label={'区'}
            separator={'：'}
            value={value[2]} 
            style={{minWidth: 100}} 
            onChange={this.onAreaChange} 
            showSearch={showSearch}
            allowClear={allowClear}
            placeholder="请选择"
            notFoundContent={'请先选择市'}
            optionFilterProp={'children'}
            options={areaList}
          />
        </div>
      </div>
    )
  }
}

export default RegionSelectV2
```
##### region-select-v2-item.js
```
import * as React from 'react'
import {Select} from 'antd'

const {Option} = Select

export default ({
  label, // 前面的label
  separator, // 分割符
  style, // 样式
  className, // 类名
  value, // 值
  onChange, 
  showSearch, // 是否能搜索 同 antd Select
  allowClear, // 是否支持清除 同 antd Select
  placeholder, // 同 antd Select
  notFoundContent, // 同 antd Select
  optionFilterProp, // 同 antd Select
  options, // 下拉数据
}) => 
  <>
    {
      label ? 
        <>
        {label}
        {separator}
        </>
        : null
    }
    <Select 
      className={className}
      style={{minWidth: 100, ...style}} 
      value={value} 
      onChange={onChange} 
      showSearch={showSearch}
      allowClear={allowClear}
      placeholder={placeholder}
      notFoundContent={notFoundContent}
      optionFilterProp={optionFilterProp}
    >
      {
        options.map(v => <Option value={v.value} data={v.children}>{v.label}</Option>)
      }
    </Select>
  </>
```

##### province.json
```
{
  "provinces": [
    {
      "name": "浙江省",
      "code": 1,
      "cities": [
        {
          "name": "杭州市",
          "code": 11,
          "areas": [{ "name": "西湖区", "code": 111 }, { "name": "余杭区", "code": 112 }]
        },
        {
          "name": "宁波市",
          "code": 12,
          "areas": [{ "name": "江北区", "code": 121 }, { "name": "江东区", "code": 122 }]
        }
      ]
    },
    {
      "name": "广东省",
      "code": 2,
      "cities": [
        {
          "name": "广州市",
          "code": 21,
          "areas": [{ "name": "白云区", "code": 211 }, { "name": "天河区", "code": 212 }]
        },
        {
          "name": "深圳市",
          "code": 22,
          "areas": [{ "name": "宝安区", "code": 221 }, { "name": "南山区", "code": 222 }]
        }
      ]
    }
  ]
}
```