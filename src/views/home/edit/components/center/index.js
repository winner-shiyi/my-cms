// Banner轮播图预览组件
import cmsCarousel from './carousel.vue'

export default {
  components: {
    cmsCarousel,
  },
  props: {
    type: {
      type: String,
      default: '',
    },
    item: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    /**
     * 把constants类型（AAA_BBB）数据转换为kebab类型（aaa-bbb）的数据
     * @returns {String} 组件名称
     */
    kebabType() {
      const type = this.type.toLowerCase().split('_').join('-')
      return `cms-${type}`
    },
  },
  render(h) {
    if (!this.type) {
      return h('')
    }
    const data = this.item.list || []
    return h(this.kebabType, {
      props: {
        item: this.item,
        data,
      },
    })
  },
}