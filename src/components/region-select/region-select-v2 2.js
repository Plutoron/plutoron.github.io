import React, {Component} from 'react'
import RegionSelectItem from './region-select-v2-item'

class RegionSelectV2 extends Component {
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
