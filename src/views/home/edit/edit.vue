<template>
  <div>
    <div class="cms-edit-body">
      <div class="edit-box">
        <div class="comps-box">
          <cms-left-list
            v-for="(module, index) in modules"
            :key="index"
            :title="module.title"
            :data="module.data"
            :options="compsOption"
            @end="onEnd"
          />
        </div>
        <div class="mobile-box">
          <div class="mobile-content">
            <div class="header">
              <span class="name">魏娜的模板<i class="el-icon-edit"></i></span>
            </div>
            <draggable
              v-model="blocks"
              :options="mobileOption"
            >
              <transition-group class="list-group" tag="div">
                <wrapper
                  v-for="block in blocks"
                  :key="block.id"
                  :item="block"
                  :is-active="block.id === activeItem.id"
                  @active="onActive"
                  @remove="onRemove"
                >
                  <div v-if="block.status === 'INIT' || block.status === 'NO_DATA'">
                    <img src="" alt="">
                  </div>
                  <cms-mobile-comps v-else :type="block.type" :item="block"></cms-mobile-comps>
                </wrapper>
              </transition-group>
            </draggable>
          </div>
        </div>
        <div class="config-box">
          <cms-mobile-config></cms-mobile-config>
        </div>
      </div>
    </div>
    <div class="cms-edit-footer">
      <el-button type="primary" >保存</el-button>
      <el-button>取消</el-button>
    </div>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
import cmsLeftList from './components/left/left.vue'
import cmsMobileComps from './components/center/index.js'
import wrapper from './components/center/wrapper.vue'
import cmsMobileConfig from './components/right/right.vue'
import mockBlocks from './mock.js'

const message = [
  {
    name: '搜索栏',
    icon: 'search',
    componentId: 1,
  },
  {
    name: '轮播图',
    icon: 'banner',
    componentId: 2,
  },
  {
    name: '图片列表',
    icon: 'grid',
    componentId: 3,
  },
  {
    name: '类型导航',
    icon: 'menu',
    componentId: 4,
  },
  {
    name: '分割栏',
    icon: 'text',
    componentId: 5,
  },
  {
    name: '商品列表',
    icon: 'shop',
    componentId: 6,
  },
]

export default {
  components: {
    draggable,
    cmsLeftList,
    cmsMobileComps,
    cmsMobileConfig,
    wrapper,
  },
  data() {
    return {
      list: message,
      // 左侧组件列表
      modules: [
        {
          title: '基础组件库',
          data: {
            list: message,
          },
        },
      ],
      // 左侧组件列表的拖拽配置
      compsOption: {
        disabled: false,
        group: {
          name: 'list',
          pull: 'clone', // 以clone形式拖拽组件
        },
        ghostClass: 'drag-ghost', // 拖拽进入手机模板后显示的css
      },
      // 中间手机模板的数据
      blocks: [],
      // 中间手机模板的拖拽配置
      mobileOption: {
        group: {
          name: 'list',
          pull: false,
        },
      },
      // 是否是添加状态，当组件从组件列表中拖拽进入手机模板中后，会设置为add状态。然后设置选中的组件为当前添加的组件
      isAdd: false,
      // 手机模板中选中的组件
      activeItem: {
        id: '',
        type: '',
        data: {},
      },
    }
  },
  mounted() {
    this.blocks = mockBlocks
    console.log('this.blocks---', mockBlocks)
  },
  methods: {
    onEnd(item) {
      if (this.isAdd) {
        this.activeItem = item
      }
      this.isAdd = false
    },
    onRemove(item) {
      this.$confirm('确认删除？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        // todo
      })
    },
    onActive(item) {
      this.activeItem = item
    },
  },
  computed: {
  },
}
</script>

<style lang="stylus">
  .cms-edit-body{
    position relative
    overflow-y hidden
    .edit-box{
      display flex
    }
    .comps-box{
      flex 0 0 220px
      margin 0 20px 0 0
      height calc(100vh - 151px - 60px)
      overflow-y scroll
      background #fff
      &::-webkit-scrollbar{
        display none
      }
      .comps-section{
        padding 0 20px 20px
      }
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
    .mobile-box{
      flex 0 0 360px
      min-width 360px
      margin 0 20px 0 0
      height calc(100vh - 151px - 60px)
      overflow hidden
      overflow-y scroll
      background #ecedf1
      &::-webkit-scrollbar{
        display none
      }
      .header{
        background url('../../../assets/header.png') top no-repeat
        background-size 100%
        height 58px
        color #fff
        text-align center
        font-size 16px
        cursor pointer
        &:hover{
          .el-icon-edit{
            color red
          }
        }
      }
      .name{
        display inline-block
        width 200px
        padding-top 30px
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
      }
      .el-icon-edit{
        margin-left 3px
        vertical-align middle
      }
    }
    .mobile-content{
    }
    .config-box{
      flex 1
      min-width 400px
      padding 0 20px
      height calc(100vh - 151px - 60px)
      background #fff
      .title{
        font-size 16px
        height 58px
        line-height 58px
        border-bottom 1px solid #e5e8ed
        margin-bottom 20px
      }
    }
  }
  .cms-edit-footer{
      display flex
      align-items center
      justify-content center
      margin-top 28px
      height 80px
      width calc(100vw - 200px)
      background-color #ffffff
      .el-button{
        width 180px
      }
    }
</style>
