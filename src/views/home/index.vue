<template>
  <div class="home">
    <ul>
      <li v-for="(item, key) in list" :key="key">首页管理{{item}}</li>
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
</style>