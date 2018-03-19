<template>
  <section class="cms-layout">
    <el-container>
      <el-header class="cms-header"><slot name="header">header</slot></el-header>
      <el-container class="cms-body">
        <el-aside width="180px" class="cms-aside"><slot name="aside">Aside</slot></el-aside>
        <el-container class="cms-main">
          <el-main><slot name="main">Main</slot></el-main>
        </el-container>
      </el-container>
    </el-container>
  </section>
</template>
<script>
export default {
  // name: 'cms-layout',
  data() {
    return {
      text: 'sssssss',
    }
  },
}
</script>

<style lang="stylus">
   @import "./init.styl";
  .cms-layout{
    width 100%
    .cms-header{
      position relative
      z-index 3
      box-shadow 0 2px 12px 0 #d1dae0
    }
    .cms-body{
      height calc(100vh - 60px)
      .cms-aside{
        box-shadow: 0 2px 21px 0 rgba(197,204,210,.41);
        z-index: 2;
      }
      .cms-main{
      overflow hidden
      overflow-y auto
      }
    }
  }
</style>