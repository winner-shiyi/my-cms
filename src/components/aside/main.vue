<template>
<el-col :span="24">
  <el-menu
    default-active="/home"
    v-bind:router="true"
    theme="dark"
    @open="handleOpen"
    @close="handleClose">
    <el-menu-item index="/home">
      <i class="el-icon-menu"></i>
      <span slot="title">首页管理</span>
    </el-menu-item>
    <el-menu-item index="/home/create">
      <i class="el-icon-setting"></i>
      <span slot="title">创建页面</span>
    </el-menu-item>
  </el-menu>
</el-col>
</template>
<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
</script>