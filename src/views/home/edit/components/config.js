import mobText from 'assets/images/mobile-comps/mob-text.png'
import mobBanner1 from 'assets/images/mobile-comps/mob-banner1.png'
// import mobBanner2 from 'assets/images/mobile-comps/mob-banner2.png'
// import mobBanner3 from 'assets/images/mobile-comps/mob-banner3.png'
import mobCategory1 from 'assets/images/mobile-comps/mob-category1.png'
// import mobCategory2 from 'assets/images/mobile-comps/mob-category2.png'
// import mobMsg from 'assets/images/mobile-comps/mob-msg.png'
// import mobSpacer from 'assets/images/mobile-comps/mob-spacer.png'
// import mobRichText from 'assets/images/mobile-comps/mob-rich-text.png'
import mobPicture1 from 'assets/images/mobile-comps/mob-picture1.png'
// import mobPicture2 from 'assets/images/mobile-comps/mob-picture2.png'
// import mobPicture3 from 'assets/images/mobile-comps/mob-picture3.png'
// import mobPicture4 from 'assets/images/mobile-comps/mob-picture4.png'
// import mobPicture5 from 'assets/images/mobile-comps/mob-picture5.png'
// import mobListCoupon1 from 'assets/images/mobile-comps/mob-list-coupon1.png'
// import mobListCoupon2 from 'assets/images/mobile-comps/mob-list-coupon2.png'
import mobListStore from 'assets/images/mobile-comps/mob-list-shop.png'
import mobListActivity from 'assets/images/mobile-comps/mob-list-activity.png'
import uuid from 'uuid/v4'

// 组件空白图
export const ghostImgs = {

  // 文本组件 - 图片
  TEXT: mobText,

  // 轮播组件 - 图片
  CAROUSEL: mobBanner1,

  // 分类组件 - 图片
  CATEGORY: mobCategory1,

  // 图片组件 - 图片
  PICTURE: mobPicture1,

  // 搜索组件 - 图片
  SEARCH: mobListActivity,

  // 商户列表组件 - 图片
  STORE_LIST: mobListStore,
}

// 左侧组件列表
export const comps = {}

/**
 * 搜索组件格式
 * @param {Object} opts 自定义配置参数
 * @returns {Object} 搜索组件数据
 */
comps.search = (opts = {}) => ({
  type: 'SEARCH',
  id: uuid(),
  status: 'INIT',
  name: '搜索栏',
  icon: 'search',
  content: '',
  list: [],
  ...opts,
})

/**
 * 轮播组件格式
 * @param {Object} opts 自定义配置参数
 * @returns {Object} 轮播组件数据
 */
comps.carousel = (opts = {}) => ({
  type: 'CAROUSEL',
  id: uuid(),
  status: 'INIT',
  name: '轮播图',
  icon: 'banner',
  layout: 1,
  list: [{ // 轮播组件详细内容，具体参考http://gitlab.ops.xkeshi.so/frontend/wemall-mobile/blob/master/client/views/coupon/index/components/README.md
    pictureUrl: '',
    link: {
      type: 0,
      subtype: 0,
      name: '',
      content: '',
    },
  }],
  ...opts,
})
/**
 * 分类组件格式
 * @param {Object} opts 自定义配置参数
 * @returns {Object} 分类组件数据
 */
comps.category = (opts = {}) => ({
  type: 'CATEGORY',
  id: uuid(),
  status: 'INIT',
  name: '类型导航',
  icon: 'menu',
  layout: 1,
  list: [{
    pictureUrl: '',
    link: {
      type: 0,
      subtype: 0,
      name: '',
      content: '',
    },
    content: '',
  }],
  ...opts,
})

/**
 * 图片广告组件格式
 * @param {Object} opts 自定义配置参数
 * @returns {Object} 图片广告组件数据
 */
comps.picture = (opts = {}) => ({
  type: 'PICTURE',
  id: uuid(),
  status: 'INIT',
  name: '图片列表',
  icon: 'grid',
  layout: 1,
  list: [{
    pictureUrl: '',
    link: {
      type: 0,
      subtype: 0,
      name: '',
      content: '',
    },
  }],
  ...opts,
})

/**
 * 分隔栏组件格式
 * @param {Object} opts 自定义配置参数
 * @returns {Object} 文本组件数据
 */
comps.text = (opts = {}) => ({
  type: 'TEXT',
  id: uuid(),
  status: 'INIT',
  name: '分割栏',
  icon: 'text',
  content: '',
  list: [],
  ...opts,
})

/**
 * 商户列表组件格式
 * @param {Object} opts 自定义配置参数
 * @returns {Object} 商户列表组件数据
 */
comps.storeList = (opts = {}) => ({
  type: 'STORE_LIST',
  id: uuid(),
  status: 'INIT',
  name: '商品列表',
  icon: 'shop',
  layout: 1,
  listIds: [],
  list: [],
  ...opts,
})

// 基础组件
export const baseComps = [
  comps.search(),
  comps.carousel(),
  comps.category(),
  comps.picture(),
  comps.text(),
  comps.storeList(),
]