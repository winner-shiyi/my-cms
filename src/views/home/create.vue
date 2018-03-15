<template>
  <div class="home">
    <ul>
      <li v-for="(item, key) in list" :key="key">创建页面{{item}}</li>
    </ul>
  </div>
</template>

<script type="text/babel">
export default {
  data() {
    return {
      title: '我是home',
      list: [4, 5, 7],
    }
  },
}
</script>

<style lang="stylus">
</style>