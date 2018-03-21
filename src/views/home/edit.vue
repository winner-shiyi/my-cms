<template>
  <div>
    <div class="cms-edit-body">
      <div class="edit-box">
        <div class="comps-box">
          <section class="comps-section">
            <h2 class="title">基础组件库</h2>
            <div class="grid">
              <draggable
                element="ul"
                :list="list"
                :options="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false"
              >
                <transition-group type="transition" :name="'flip-list'">
                  <li class="grid-item" v-for="element in list" :key="element.componentId">
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
        <div class="mobile-box">
          <div class="mobile-content">
            <div class="header">
              <span class="name">魏娜的模板<i class="el-icon-edit"></i></span>
            </div>
            <draggable
              element="span"
              v-model="list" :options="dragOptions" :move="onMove">
                <transition-group name="no" class="list-group" tag="ul">

                </transition-group>
            </draggable>
          </div>
        </div>
        <div class="config-box">
          <h2 class="title">页面配置</h2>
          <div v-if="isEditPageName">
            <el-form :model="cmsPageValidateForm" ref="cmsPageValidateForm" label-width="100px" class="demo-ruleForm">
              <el-form-item
                label="项目名称"
                prop="projectName"
                :rules="[
                  { required: true, message: '项目名称不能为空', trigger: 'change' },
                  { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur, change' }
                ]"
              >
                <el-select
                  v-model="cmsPageValidateForm.projectName"
                  filterable
                  allow-create
                  default-first-option
                  clearable
                  placeholder="请选择或新增项目">
                  <el-option
                    v-for="item in options5"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item
                class="page-item"
                label="页面名称"
                prop="pageName"
                :rules="[
                  { required: true, message: '页面名称不能为空', trigger: 'blur' },
                  { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur, change' }
                ]"
              >
                <el-input
                  v-model="cmsPageValidateForm.pageName"
                  placeholder="最多支持20个字"
                  clearable
                >
                </el-input>
              </el-form-item>
              <!-- <el-form-item>
                <el-button type="primary" @click="submitForm('cmsPageValidateForm')">提交</el-button>
                <el-button @click="resetForm('cmsPageValidateForm')">重置</el-button>
              </el-form-item> -->
            </el-form>
          </div>
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
  },
  data() {
    return {
      list: message,
      editable: true,
      isDragging: false,
      delayedDragging: false,
      isEditPageName: true,
      cmsPageValidateForm: {
        pageName: '',
        projectName: '',
      },
      options5: [{
        value: 'HTML',
        label: 'HTML',
      }, {
        value: 'CSS',
        label: 'CSS',
      }, {
        value: 'JavaScript',
        label: 'JavaScript',
      }],
    }
  },
  methods: {
    onMove({relatedContext, draggedContext}) {
      const relatedElement = relatedContext.element
      const draggedElement = draggedContext.element
      return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
    },
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: 'description',
        disabled: !this.editable,
        ghostClass: 'ghost',
      }
    },
  },
  watch: {
    isDragging(newValue) {
      if (newValue) {
        this.delayedDragging = true
        return
      }
      this.$nextTick(() => {
        this.delayedDragging = false
      })
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
        line-height: 60px;
        border-radius: 2px;
        background-color: #fff;
        border: solid 1px #dadee2;
        color: #dadee2;
        font-size: 28px;
        text-align: center;
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
        background url('../../assets/header.png') top no-repeat
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
