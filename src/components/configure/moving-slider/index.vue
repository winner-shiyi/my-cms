<template>
  <div class="wrap-moving-slider">
    <div class="moving-slider" v-for="(item, key) in items" :key="key">
      <p>第{{key + 1}}张</p>
      <base-upload v-if="showUpload" :item="items[key]" :index="key"></base-upload>
    </div>
  </div>
</template>
<script>
import baseUpload from '../upload/upload.vue'
export default {
  components: {
    baseUpload,
  },
  props: {
    // 添加最大数据
    max: {
      type: Number,
      default: 10,
    },
    items: {
      type: Array,
      default: () => [],
    },
    // 是否显示上传图片组件
    showUpload: {
      type: Boolean,
      default: true,
    },
    // 是否显示内容输入组件
    editContent: {
      type: Boolean,
      default: false,
    },

  },

}
</script>
