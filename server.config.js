module.exports = {
  // dev环境
  dev: {
    target: 'http://127.0.0.71:9999',
    pathRewrite: '',
  },
  // 模拟数据环境
  mock: {
    target: 'http://172.16.2.71:8068',
    pathRewrite: '/mockjsdata/59',
  },
  // 线上环境
  production: {
    
  },
}