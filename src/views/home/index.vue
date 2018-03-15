<template>
  <div class="home">
    <ul>
      <li v-for="(item, key) in list" :key="key">sdfsf{{item}}</li>
    </ul>
  </div>
</template>

<script type="text/babel">
export default {
  data() {
    return {
      title: '我是home',
      list: [1, 3, 5],
    }
  },
}
</script>

<style lang="stylus">
  .home{
    width 100%
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>