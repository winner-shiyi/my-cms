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
    onClone(el) {
      const item = { ...JSON.parse(JSON.stringify(el)), id: uuid() }
      this.cloneItem = item
      return item
    },
  },
}
</script>