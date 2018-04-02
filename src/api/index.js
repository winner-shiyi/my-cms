import axios from 'axios'
import Ajax from './install'
import './axios.config'

class Apis extends Ajax {
  /**
   * bbbbb请求
   * @url http://172.16.2.71:8068/workspace/myWorkspace.action?projectId=59#4324
   */
  blogList(param) {
    return super.post('/api/user/login', param)
  }
  /**
   * 创建新页面请求
   * @url http://172.16.2.71:8068/workspace/myWorkspace.do?projectId=86#5312
   */
  createPage(param) {
    return super.post('/api/page/create', param)
  }
  /**
   * 编辑页面请求
   * @url http://172.16.2.71:8068/workspace/myWorkspace.do?projectId=86#5314
   */
  getMobileData(param) {
    return super.post('/api/page/detail', param)
  }
}

const apis = new Apis(axios)
export default apis