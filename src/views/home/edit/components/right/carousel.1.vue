<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
      <el-row class="form-li" v-for="(item, index) in configItems" :key="index">
        <el-form-item label="上传图片" prop="uploadImage" required>
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
        <el-form-item label="跳转方式" prop="link" placeholder="请选择跳转方式" required>
          <el-input type="textarea" v-model="ruleForm.link"></el-input>
        </el-form-item>
        <el-form-item label="自动播放" prop="autoPlay" required>
          <el-switch v-model="ruleForm.autoPlay"></el-switch>
        </el-form-item>
      </el-row>
      <el-form-item class="wrap-btn">
        <el-button class="add-btn" @click="addItem">添 加(1/10)</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        uploadImage: '',
        autoPlay: false,
        link: '',
      },
      rules: {

      },
      imageUrl: '',
      configItems: [
        1,
      ],
    }
  },
  methods: {
    addItem() {
      const item = {}
      this.configItems.push(item)
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
}
</script>
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
  .form-li{
    border: 1px solid #e7e7e7;
    padding: 20px 30px 0;
    margin-bottom 20px
    &:last-child{
      margin-bottom none
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
