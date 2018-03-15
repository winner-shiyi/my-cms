<template>
  <section class="cms-layout">
    <el-container>
      <el-header><slot name="header">header</slot></el-header>
      <el-container>
        <el-aside width="200px"><slot name="aside">Aside</slot></el-aside>
        <el-container>
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
  @import "./init.styl"
  .cms-layout{
    width 100%
  }
</style>