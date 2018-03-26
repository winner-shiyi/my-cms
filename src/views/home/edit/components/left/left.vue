<template>
  <div>
    <section class="comps-section">
      <h2 class="title">{{title}}</h2>
      <div class="grid">
        <draggable
          element="ul"
          v-model="data.list"
          :options="options"
          :clone="onClone"
          @start="onStart"
          @end="onEnd"
        >
          <transition-group type="transition">
            <li class="grid-item" v-for="element in data.list" :key="element.id">
              <div class="icon-box">
                <i :class="`icon-cms-${element.icon}`"></i>
              </div>
              <span class="name">{{element.name}}</span>
            </li>
          </transition-group>
      </draggable>
      </div>
    </section>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
import uuid from 'uuid/v4'

export default {
  components: {
    draggable,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    data: {
      type: Object,
      default: () => {},
    },
    options: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      // 拖拽所克隆的数据包
      cloneItem: {},
    }
  },
  methods: {
    onStart() {
      this.$emit('start', this.cloneItem)
      this.options.disabled = true
    },
    onEnd() {
      this.$emit('end', this.cloneItem)
      this.options.disabled = false
    },
    /**
     * 初始化拖拽到手机模板上的组件
     * @param  {Object} el  初始数据
     * @return {Object}     初始化后的数据（修改了id，保证同样的组件，但是有不同的id）
     */
    onClone(el) {
      console.log('el====', el)
      const item = { ...JSON.parse(JSON.stringify(el)), id: uuid() }
      this.cloneItem = item
      return item
    },
  },
}
</script>

<style lang="stylus" scoped>
  .comps-section{
    padding 0 20px 20px
    .title{
      font-size 16px
      height 58px
      line-height 58px
      border-bottom 1px solid #e5e8ed
    }
    .grid-item{
      display inline-block
      margin 10px 12px
      cursor move
      text-align center
      &:hover{
        .icon-box{
          border: solid 1px #a5cffe;
        }
      }
    }
    .grid{
      padding-top 10px
    }
    .icon-box{
      width 60px
      height 60px
      line-height 60px
      border-radius 2px
      background-color #fff
      border solid 1px #dadee2
      color #dadee2
      font-size 28px
      text-align center
      margin-bottom 5px
    }
  }
</style>
