import axios from 'axios'
import Ajax from './install'
import './axios.config'

class Apis extends Ajax {
  /**
   * bbbbb请求
   * @url http://172.16.2.71:8068/workspace/myWorkspace.action?projectId=59#4324
   */
  blogList(param) {
    return super.post('/api/okr/editTime', param)
  }
  /**
   * xxxxx请求
   * @url http://172.16.2.71:8068/workspace/myWorkspace.action?projectId=59#4324
   */
  bbbb(param) {
    return super.post('/api/dfdfdfdfdf', param)
  }
}

const apis = new Apis(axios)
export default apis