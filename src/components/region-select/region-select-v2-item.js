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
      getPopupContainer={triggerRef => triggerRef.parentNode}
    >
      {
        options.map(v => <Option value={v.value} data={v.children}>{v.label}</Option>)
      }
    </Select>
  </>
