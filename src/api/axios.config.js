/**
 * @file Axios基础配置，"请求/响应"拦截，不涉及业务逻辑。
 */
import axios from 'axios'
// 请求配置
axios.interceptors.request.use((config) => {
  config.headers['X-Requested-Width'] = 'XMLHttpRequest'
  return config
})

// 响应数据配置
axios.interceptors.response.use((response) => {
  const data = response.data
  if (data.resultCode === '0') {
    return data
  }
  const err = new Error(data.resultDesc)
  err.code = data.resultCode
  err.msg = data.resultDesc
  throw err
}, (err) => {
  return {
    msg: err,
    code: err.response.resultCode,
  }
})