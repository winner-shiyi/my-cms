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
            <div class="header" @click="onOpen">
              <span class="name">魏娜的模板<i class="el-icon-edit"></i></span>
            </div>
            <draggable
              v-model="blocks"
              :options="mobileOption"
              @add="onAdd"
              class="blocks-box"
            >
              <transition-group
                :class="[
                  'list-group',
                   blocks && blocks.length ? '' : 'drag-block--show'
                ]"
                tag="div"
              >
                <wrapper
                  v-for="(block, key) in blocks"
                  :key="key"
                  :item="block"
                  :is-active="block.id === activeItem.id"
                  @active="onActive"
                  @remove="onRemove"
                >
                  <div class="drag-ghost__block" v-if="block.status === 'INIT' || block.status === 'NO_DATA'">
                    <img :src="ghostImgs[block.type]">
                  </div>
                  <cms-mobile-comps v-else :type="block.type" :item="block"></cms-mobile-comps>
                </wrapper>
              </transition-group>
            </draggable>
          </div>
        </div>
        <div class="config-box">
          <h2 class="title">{{ activeItem.id ? '内容配置': '页面配置'}}</h2>
          <cms-mobile-config
            v-if="activeItem.id"
            :key="activeItem.id" :type="activeItem.type" :item="activeItem"
          >
          </cms-mobile-config>
          <page-name-config v-else></page-name-config>
        </div>
      </div>
    </div>
    <div class="cms-edit-footer">
      <el-button type="primary" @click="onSubmit" :disabled="isLock">保存</el-button>
      <el-button @click="onCancel">取消</el-button>
    </div>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
import cmsLeftList from './components/left/left.vue'
import cmsMobileComps from './components/center/index.js'
import wrapper from './components/center/wrapper.vue'
import cmsMobileConfig from './components/right/index.js'
import pageNameConfig from './components/right/page-config.vue'
// import mockBlocks from './mock.js'
import { baseComps, ghostImgs } from './components/config'

export default {
  components: {
    draggable,
    cmsLeftList,
    cmsMobileComps,
    cmsMobileConfig,
    wrapper,
    pageNameConfig,
  },
  data() {
    return {
      // 左侧组件列表
      modules: [
        {
          title: '基础组件库',
          data: {
            list: baseComps,
            ghosts: ghostImgs,
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
      // 空白图片，组件状态为INIT或NO_DATA时会显示该图片
      ghostImgs,
      // 是否disable保存按钮
      isLock: false,
    }
  },
  mounted() {
    // todo
    // this.blocks = mockBlocks
    // console.log('this.blocks---', mockBlocks)
  },
  computed: {
    isError() {
      return this.blocks.some((block) => block.status === 'ERROR')
    },
  },
  methods: {
    /**
     * 当组件增加到手机模板上时
     *（注意：此时该组件还处于拖拽状态）
     */
    onAdd() {
      this.isAdd = true
    },
    /**
     * 组件结束拖拽
     * @param {Object} item 新增的模块
     */
    onEnd(item) {
      // 组件拖拽到手机模板上之后，自动设置为选中模块
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
        this.activeItem = {}
        this.blocks = this.blocks.filter((block) => block.id !== item.id)
      })
    },
    onActive(item) {
      this.activeItem = item
    },
    onOpen() {
      this.activeItem = {}
    },
    /**
     * 提交表单
     */
    onSubmit() {
      this.activeItem = {}
      this.$nextTick(() => {
        if (this.isError) {
          this.$message.error('存在未完成的组件，请先完成组件内容设置')
        } else {
          this.isLock = true
          // todo
        }
      })
    },
    /**
     * 取消
     */
    onCancel() {
      this.$confirm('退出后输入内容将不保存，是否继续退出？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        this.$router.push({ name: 'pages.home' })
      }).catch(() => {})
    },
  },
}
</script>

<style lang="stylus">
  .cms-edit-body{
    position relative
    overflow-y hidden
    .edit-box{
      display flex
      padding-bottom 10px
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
    }
    .mobile-box{
      flex 0 0 340px
      min-width 340px
      margin 0 20px 0 0
      height calc(100vh - 151px - 60px)
      background #ecedf1
      overflow hidden
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
      .blocks-box{
        height: calc(100vh - 151px - 60px - 58px);
        overflow-y: scroll;
        &::-webkit-scrollbar{
          display none
        }
      }
      .list-group {
        width: 340px
        padding-top 2px
        border-top none
        background-color #f1f1f1
        &.drag-block--show {
          height: calc(100vh - 251px)
        }
        .drag-ghost {
          position: relative;
          margin: 0;
          padding: 0;
          &__block {
            img {
              max-width: 100%;
              display: block;
            }
          }
        }
      }
    }
    .config-box{
      flex 1
      min-width 400px
      padding 0 20px
      height calc(100vh - 151px - 60px)
      background #fff
      overflow-y scroll
      &::-webkit-scrollbar{
        display none
      }
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
