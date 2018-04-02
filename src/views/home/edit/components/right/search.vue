<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px">
      <el-row class="form-li" v-for="(item, index) in ruleForm.configItems" :key="index">
        <p class="count-box" v-show="isArray">第<span class="count">{{index + 1}}</span>个</p>
        <el-form-item label="设置高度" :prop="'configItems.' + index + '.height'">
          <el-input-number v-model="num" @change="handleChange" :min="40" :max="100" size="medium"></el-input-number>
        </el-form-item>
        <el-form-item
          label="跳转方式"
          :prop="'configItems.' + index + '.link'"
          placeholder="请选择跳转方式"
          :rules="[
            { required: true, message: '跳转方式不能为空', trigger: 'blur' },
          ]"
        >
          <el-input type="textarea" v-model="item.link"></el-input>
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
export default {
  data() {
    return {
      num: 40, // 高度默认值
      ruleForm: {
        configItems: [this.createdJson()],
      },
      rules: {},
      imageUrl: '',
      isArray: false, // 不是数组组件，没有增加按钮
    }
  },
  methods: {
    createdJson() {
      return {
        height: '',
        link: '',
      }
    },
    handleChange(value) {
      console.log(value)
    },
    addItem() {
      this.ruleForm.configItems.push(this.createdJson())
    },
    onRemove(index) {
      this.$confirm('确认删除？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        this.ruleForm.configItems.splice(index, 1)
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

<style lang="stylus">
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 106px;
    height: 106px;
    line-height: 106px;
    text-align: center;
  }
  .avatar {
    width: 106px;
    height: 106px;
    display: block;
  }
</style>
