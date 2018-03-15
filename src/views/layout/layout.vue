<template>
  <section class="cms-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
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