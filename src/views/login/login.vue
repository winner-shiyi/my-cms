<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div class="demo">
      登录页面
      <el-button type="success" @click="clickFn">成功按钮</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: '登录页面',
    }
  },
  methods: {
    clickFn() {
      this.$ajax.blogList({aaa: 'ffff'}).then((data) => {
        console.log(data)
      }).catch((err) => {
        console.log(err)
      })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  h1, h2 {
    font-weight: normal;
  }
  .demo{
    color:red
  }
</style>
