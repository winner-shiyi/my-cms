<template>
  <div>
    <div class="mobile-content">
      <div class="header">
        <span class="name">魏娜的模板<i class="el-icon-edit"></i></span>
      </div>
      <draggable
        element="span"
        v-model="data.list"
        :options="options"
      >
        <transition-group class="list-group" tag="div">
          <div v-for="(comp) in data.list" :key="comp.id">
            {{ comp.name }}
          </div>
        </transition-group>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  components: {
    draggable,
  },
  props: {
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
      list: [],
    }
  },
}
</script>
