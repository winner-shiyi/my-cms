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
        prop="pageName"
        label="页面名称">
      </el-table-column>
      <el-table-column
        prop="projectName"
        label="项目名称">
      </el-table-column>
      <el-table-column
        prop="editTime"
        label="修改日期"
        width="180">
      </el-table-column>
      <el-table-column
        label="操作"
        width="180">
        <template slot-scope="scope">
          <router-link :to="`/home/edit/${scope.row.pageId}`">
            <el-button type="text" size="small">编辑</el-button>
          </router-link>
          <el-button type="text" size="small" @click="deletePage(scope.row.pageId)" >删除</el-button>
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
      tableData: [],
    }
  },
  computed: {
    aaa() {
      return this.aaaa
    },
  },
  methods: {
    deletePage(id) {
      this.$confirm('此操作将永久删除该模板, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        // todo发送删除请求，请求成功后刷新列表页
        this.$ajax.deletePage({ pageId: id }).then((result) => {
          this.$message({
            type: 'success',
            message: '删除成功!',
          })
          this.getPageData()
        }).catch((err) => {
          this.$message.error(err.msg)
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除',
        })
      })
    },
    getPageData() {
      const param = {}
      this.$ajax.getPageList(param).then((result) => {
        this.tableData = result.list
      }).catch((err) => {
        this.$message.error(err.msg)
      })
    },
  },
  mounted() {
    this.getPageData()
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
    .search{
      width 40%
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
