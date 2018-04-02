<template>
  <div class="carousel">
     <img width="338" height="182" :src="data[0].pictureUrl">
  </div>
</template>

<script>

export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    item: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    console.log('中间图片---data', this.data)
    console.log('中间图片---item', this.item)
  },
}
</script>
<style lang="stylus" scoped>
.carousel{
  background : #fff;
}
</style>
