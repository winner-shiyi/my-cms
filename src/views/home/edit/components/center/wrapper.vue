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
    <span v-show="removable && (isActive || isHover)" class="comps-block__close" @click.prevent.stop="onRemove">X</span>
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
    display: inline-block;
    width: 100%;
    font-size: 0;
    cursor: pointer;
    &::before {
      content: '';
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 348px;
      height: calc(100% + 8px);
      border-radius: 5px;
      border: 4px solid rgba(80,191,255,0.25);
      box-shadow: 0 4px 6px 0 rgba(230, 234, 238, 0.7);
      margin: -4px 0 0 -5px;
      z-index: 1;
    }
    &::after {
      content: '';
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 1px solid rgba(0,156,229,.8);
    }
    &__hover {
      // &::before {
      //   display: block;
      //   width: 360px;
      //   border: 4px solid rgba(80,191,255,0.25);
      //   box-shadow: 0 4px 6px 0 rgba(230, 234, 238, 0.7);
      //   margin: -4px 0 0 -5px;
      // }
      &::after {
        display: block;
      }
    }
    &__active {
      &::before {
        display: block;
      }
      &::after {
        display: block;
      }
    }
    &__close {
      position: absolute;
      right: -9px;
      top: -9px;
      width: 20px;
      height: 20px;
      line-height: 18px;
      border: 1px solid;
      border-radius: 50px;
      text-align: center;
      font-size: 12px;
      color: #ff4949;
      background-color: #fff;
      z-index: 1;
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
