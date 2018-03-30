<template>
  <div :class="[
      'comps-block',
      isHover ? 'comps-block__hover comps-block__active' : '' ,
      isActive ? 'comps-block__active' : ''
    ]"
    v-on:mouseover="ononMouseover"
    v-on:mouseout="onMouseout"
    @click="onActive"
  >
    <slot></slot>
    <span v-show="removable && (isActive || isHover)" class="comps-block__close" @click.prevent.stop="onRemove"><i class="el-icon-delete"></i></span>
  </div>
</template>
<script>
export default {
  props: {
    item: {},
    isActive: {
      type: Boolean,
      default: false,
    },
    removable: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isHover: false,
    }
  },
  methods: {
    ononMouseover() {
      this.isHover = true
    },
    onMouseout() {
      this.isHover = false
    },
    onActive() {
      this.$emit('active', this.item)
    },
    onRemove() {
      this.$emit('remove', this.item)
    },
  },
}
</script>
<style lang="stylus" scoped>
  .comps-block {
    position: relative;
    width: 100%;
    box-sizing border-box
    cursor: pointer;
    border 2px solid #fff
    &__active {
      border 2px dotted #409EFF
      box-shadow 0 1px 5px #b3bdd8
    }
    &__close {
      position: absolute;
      right: 0;
      top: 0;
      width: 20px;
      height: 20px;
      text-align: center;
      font-size: 13px;
      color: #000;
      background-color: rgba(0, 0, 0, 0.15);
    }
    &__error {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      border: 1px solid #ff4949;
    }
  }
</style>
