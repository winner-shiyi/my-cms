// search编辑组件
import CmsSearch from './search.vue'
// Banner轮播图编辑组件
import CmsCarousel from './carousel.vue'
// 类型编辑组件
import CmsCategory from './category.vue'
// 图片编辑组件
import CmsPicture from './picture.vue'
// 文本编辑组件
import CmsText from './text.vue'
// 商户列表编辑组件
import CmsStoreList from './store-list.vue'

export default {
  components: {
    CmsSearch,
    CmsCarousel,
    CmsCategory,
    CmsPicture,
    CmsText,
    CmsStoreList,
  },
  props: {
    // 模块类型
    type: {
      type: String,
      default: '',
    },
    // 渲染数据包
    item: {
      type: Object,
      default: () => {},
    },
    // 提交保存
    onSubmit: {
      type: Function,
      default: () => {},
    },
    // 点击取消
    onCancel: {
      type: Function,
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
    const data = (this.item || {}).list || []
    return h(this.kebabType, {
      props: {
        item: this.item,
        data,
      },
      on: {
        submit: this.onSubmit,
        cancel: this.onCancel,
      },
    })
  },
}