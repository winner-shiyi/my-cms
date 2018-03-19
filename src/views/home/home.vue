<template>
  <div class="cms-home">
    <div class="home-header">
      <router-link to="/home/create">
        <el-button type="primary" icon="el-icon-plus" >创建页面</el-button>
      </router-link>
      <div class="search">
        <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="页面名称" value="1"></el-option>
            <el-option label="项目名称" value="2"></el-option>
            <el-option label="修改日期" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="页面名称">
      </el-table-column>
      <el-table-column
        prop="name"
        label="项目名称">
      </el-table-column>
      <el-table-column
        prop="date"
        label="修改日期"
        width="180">
      </el-table-column>
      <el-table-column
        label="操作"
        width="180">
        <template slot-scope="scope">
          <router-link to="/home/edit">
            <el-button type="text" size="small">编辑</el-button>
          </router-link>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="10">
    </el-pagination>
  </div>
</template>

<script type="text/babel">
export default {
  data() {
    return {
      title: '我是home',
      list: [1, 3],
      input5: '',
      select: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
      }],
    }
  },
  computed: {
    aaa() {
      return this.aaaa
    },
  },
}
</script>

<style lang="stylus">
  // @import "./init.styl";
  .cms-home{
    .home-header{
      display flex
      align-items center
      justify-content space-between
      height 68px
      background #fff
      margin-bottom 20px
      padding 0 10px
    }
    .el-select .el-input {
      width 110px
    }
  .el-input-group__prepend {
    background-color #fff
  }
  .el-pagination{
    text-align right
    margin-top 30px
  }
  .el-table th{
    background #e5e9f2
    height 55px
    color #475669
    font-weight 400
  }
  }
</style>
