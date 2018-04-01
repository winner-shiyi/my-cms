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
          <el-upload
            class="avatar-uploader"
            action="http://172.16.2.71:8068/mockjsdata/86/user/uploadImage"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
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

export default {
  data() {
    return {
      ruleForm: {
        configItems: [this.createdJson()],
      },
      // rules: {
      //   uploadImage: [
      //     { required: true, message: '图片不能为空', trigger: 'blur' },
      //   ],
      //   link: [
      //     { required: true, message: '跳转地址不能为空', trigger: 'blur' },
      //   ],
      // },
      imageUrl: '',
      isArray: true,
    }
  },
  methods: {
    createdJson() {
      return {
        uploadImage: '',
        autoPlay: false,
        link: '',
      }
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
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
  },
  mounted() {
    const aa = [
      {
        uploadImage: '',
        autoPlay: false,
        link: '111',
      },
      {
        uploadImage: '',
        autoPlay: false,
        link: '222',
      },
    ]
    this.ruleForm.configItems = aa
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
