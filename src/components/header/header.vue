<template>
  <div class="header">
    <div class="cms-header-logo">
      <h1 class="logo">
        <img src="../../assets/logo.png" alt="无线" width="80" height="60">
      </h1>
    </div>
    <div class="cms-header-slide">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          魏娜<i class="el-icon-caret-bottom"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>账号信息</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
  .header{
    width 100%
    display flex
    justify-content space-between
    .cms-header-logo{
      width 80px
      .logo{
        width 80px
        height 60px
      }
    }
    .cms-header-slide{
      width 200px
      line-height 60px
      text-align right
      .el-icon-caret-bottom{
        margin-left 3px
        font-size 20px
      }
    }
  }
</style>