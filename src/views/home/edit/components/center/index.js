// Banner轮播图编辑组件
import CmsCarousel from './carousel.vue'
// // search编辑组件
// import CmsSearch from './title.vue'
// // 类型编辑组件
// import CmsCategory from './category.vue'
// // 图片编辑组件
// import CmsPicture from './picture.vue'
// // 文本编辑组件
// import CmsText from './text.vue'
// // 商户列表编辑组件
// import CmsStoreList from './store-list.vue'

export default {
  components: {
    CmsCarousel,
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