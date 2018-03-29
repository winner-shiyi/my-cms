<template>
  <div class="base-upload">
    <el-row>
      <el-col v-if="showLabel" class="label label-width" :span="5"><span class="col-red">*</span>{{label}}</el-col>
      <el-col :span="colSpan" style="min-height: 130px">
        <div class="el-upload el-upload--picture-card">
          <i class="el-icon-plus"></i>
          <div class="el-upload__text">上传图片</div>
          <input type="file" :id="`uploadFileImg_${id}`" @change="uploadImg" name="file" class="cg-upload-input">
          <div class="cg-upload-img" v-if="hasPicture">
            <img @click="showPicture" :src="item.pictureUrl" alt="点击查看大图">
          </div>
        </div>
        <div class="el-upload__msg">
          <label class="change-img-btn" v-if="hasPicture" :for="`uploadFileImg_${id}`">修改图片</label><br><br>
          <span v-if="showSizeTip">建议尺寸{{imgSize.cropWidth}}PX*{{imgSize.cropHeight}}PX，</span><br>支持{{ fileAccept.join('、') }}格<br>式，大小在{{ maxFileSize | sizeUnit }}以内
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import uuid from 'uuid/v4'

export default {
  data() {
    return {
      
    }
  },
}
</script>

<style lang="stylus" scoped>
  .change-img-btn{
    color : #20a0ff;
    text-decoration: underline;
    cursor : pointer;
  }
  .cg-upload-img{
    left: 0;
    top: 0;
    width : 100%;
    height: 100%;
    position: absolute;
    z-index : 3;
    background : #fbfdff;
    line-height: 1;
    img {
      width : 100%;
      vertical-align: middle;
    }
    &:before{
      content: "";
      display : inline-block;
      height :100%;
      width : 0;
      vertical-align : middle;
    }
  }
  .cg-upload-err{
    color: red;
    font-size: 12px
    padding-top: 10px;
  }
  .cg-upload-input{
    display block;
    font-size: 86px;
    opacity: 0;
  }
  .cg-upload{
    display: inline-block
    padding-bottom: 24px;
    .label {
      line-height: 36px;
    }
    .el-upload__msg{
      display: inline-block;
      vertical-align: bottom;
      margin-left: 10px;
      color: #bfbfbf;
      line-height: 16px;
      font-size: 12px;
    }
  }
  .el-upload--picture-card{
    width: 104px !important;
    height: 104px !important;
    position: relative;
    cursor: pointer;
    overflow :hidden;
  }
  .el-icon-plus{
    position: absolute;
    left: 35px;
    top: 26px;
    font-size: 32px;
  }
  .el-upload__text{
    line-height: 0;
    top: 82px;
    position: absolute;
    width: 100%;
    color: #bdbdbd;
  }
</style>
