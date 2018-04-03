<template>
  <div>
    <el-form :model="ruleForm" ref="ruleForm" label-width="80px">
      <el-row class="form-li" v-for="(item, index) in ruleForm.configItems" :key="index">
        <p class="count-box" v-show="isArray">第<span class="count">{{index + 1}}</span>个</p>
        <el-form-item
          label="上传图片"
          :prop="'configItems.' + index + '.uploadImage'"
          :rules="[
              { required: true, message: '请上传图片', trigger: 'blur' },
            ]"
        >
          <upload-img :item="item"></upload-img>
        </el-form-item>
        <el-form-item
          label="跳转方式"
          :prop="'configItems.' + index + '.link'"
          placeholder="请选择跳转方式"
          :rules="[
            { required: true, message: '跳转方式不能为空', trigger: 'blur' },
          ]"
        >
          <el-input type="textarea" v-model="item.link" clearable></el-input>
        </el-form-item>
        <el-form-item label="自动播放" :prop="'configItems.' + index + '.autoPlay'">
          <el-switch v-model="item.autoPlay"></el-switch>
        </el-form-item>
        <span v-show="ruleForm.configItems.length > 1" class="close" @click.prevent="onRemove(index)"><i class="el-icon-delete"></i></span>
      </el-row>
      <el-form-item class="wrap-btn" v-show="isArray && ruleForm.configItems.length < 10">
        <el-button class="add-btn" @click="addItem">添 加({{ruleForm.configItems.length}}/10)</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
// import uuid from 'uuid/v4'
import uploadImg from './upload-img.vue'
import { baseComps } from '../../components/config'

export default {
  components: { uploadImg },
  props: {
    // 轮播图数据项集合
    data: {
      type: Array,
      default: () => [],
    },
    // 渲染数据包
    item: {
      type: Object,
      default: () => {},
    },
    // 模块类型
    type: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      ruleForm: {
        // configItems: [this.createdJson()],
        configItems: this.item.list,
      },
      // rules: {
      //   uploadImage: [
      //     { required: true, message: '图片不能为空', trigger: 'blur' },
      //   ],
      //   link: [
      //     { required: true, message: '跳转地址不能为空', trigger: 'blur' },
      //   ],
      // },
      isArray: true,
    }
  },
  mounted() {
    console.log('右侧轮播图---baseComps', baseComps)
    console.log('右侧轮播图---type', this.type)
    console.log('右侧轮播图---item', this.item)
  },
  watch: {
    ruleForm: {
      deep: true,
      /**
       * 监听数据变化，一旦有变就改变组件的状态为STORED
       */
      handler() {
        this.item.status = 'STORED'
      },
    },
  },
  methods: {
    createdJson() {
      let baseFromItem = {}
      baseComps.forEach((item) => {
        if (item.type === this.type) {
          baseFromItem = {...item.list[0]}
        }
      })
      return baseFromItem
    },
    addItem() {
      // this.ruleForm.configItems.push(this.createdJson())
      this.item.list.push({...this.createdJson()})
    },
    onRemove(index) {
      this.$confirm('确认删除？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        // this.ruleForm.configItems.splice(index, 1)
        this.item.list.splice(index, 1)
      })
    },
  },

}
</script>
<style lang="stylus" scoped>
  .form-li{
    border 1px solid #e7e7e7
    padding 15px 30px 20px
    margin-bottom 20px
    &:last-child{
      margin-bottom none
    }
    .close{
      position: absolute;
      right: 0;
      top: 0;
      width: 20px;
      height: 20px;
      text-align: center;
      font-size: 13px;
      color: #000;
      background-color: rgba(0, 0, 0, 0.15);
      cursor pointer
    }
    .count-box{
      height 35px
      font-size 12px
    }
    .count{
      margin 0 4px
      color #409eff
      font-weight bold
    }
  }
  .wrap-btn{
    padding-top: 20px;
    text-align: center;
  }
  .add-btn{
    border: 1px solid #20a0ff;
    color: #20a0ff;
    width : 70%;
  }
</style>
