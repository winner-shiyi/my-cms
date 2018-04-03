import axios from 'axios'
import Ajax from './install'
import './axios.config'

class Apis extends Ajax {
  /**
   * 用户登录请求
   * @url http://172.16.2.71:8068/workspace/myWorkspace.action?projectId=86#5309
   */
  userLogin(param) {
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
   * 删除页面请求
   * @url http://172.16.2.71:8068/workspace/myWorkspace.do?projectId=86#5311
   */
  deletePage(param) {
    return super.post('/api/page/delete', param)
  }
  /**
   * 项目名称数据请求
   * @url http://172.16.2.71:8068/workspace/myWorkspace.action?projectId=86#5315
   */
  queryProjectName(param) {
    return super.post('/api/dictionary/query', param)
  }
  /**
   * 页面列表数据请求
   * @url http://172.16.2.71:8068/workspace/myWorkspace.do?projectId=86#5310
   */
  getPageList(param) {
    return super.post('/api/page/list', param)
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