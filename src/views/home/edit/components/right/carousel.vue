<template>
  <div>
    <el-form>
      <el-form-item>
        <moving-slider
          :items="data"
          :max="10"
          :source-type="item.type"
        >
        </moving-slider>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import movingSlider from 'components/configure/moving-slider/index.vue'

export default {
  components: {
    movingSlider,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    // 组件渲染数据包
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>
<style lang="stylus">
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 106px;
    height: 106px;
    line-height: 106px;
    text-align: center;
  }
  .avatar {
    width: 106px;
    height: 106px;
    display: block;
  }
</style>
