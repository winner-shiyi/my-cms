<template>
  <div class="cms-login">
    <div class="blank"></div>
    <div class="login-main">
      <div class="left">
        <div class="name"><i class="icon-cms-hello"></i> CMS</div>
      </div>
      <div class="right">
        <el-form
          :model="loginForm"
          status-icon
          ref="loginForm"
        >
          <div class="title">Login</div>
          <el-form-item
            prop="username"
            :rules="[
              { required: true, message: '请输入用户名', trigger: 'blur' },
              { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur, change' }
            ]"
          >
              <el-input v-model="loginForm.username" placeholder="账号"></el-input>
          </el-form-item>
          <el-form-item
            prop="password"
            :rules="[
              { required: true, message: '请输入密码', trigger: 'blur' },
              { pattern: /^[0-9a-zA-Z]{8,20}$/, message: '支持8-10位数字及英文', trigger: 'blur, change' }
            ]"
          >
            <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item class="btn-item">
            <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="blank"></div>
    <el-button type="success" @click="clickFn">成功按钮</el-button>
    <footer class="footer">Copyright © 2018  产业互联技术中心</footer>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: '登录页面',
      loginForm: {
        password: '',
        checkPass: '',
        username: '',
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    clickFn() {
      this.$ajax.blogList({aaa: 'ffff'}).then((data) => {
        console.log(data)
      }).catch((err) => {
        console.log('err---', err)
      })
    },
  },
}
</script>

<style lang="stylus">
  .cms-login{
    display flex
    flex-direction column
    justify-content space-between
    align-items center
    height 100%
    .blank{
      flex 1
    }
    .login-main{
      flex 0 0 430px
      width 760px
      height  430px
      display flex
      background #fff
      border-radius 4px
      box-shadow 0 3px 16px 0 #c6d1d9
      overflow hidden
      .left{
        display flex
        flex-direction column
        justify-content center
        width 280px
        background-image linear-gradient(-225deg, #2A5BBE 0%, #213B8E 100%)
        .name{
          text-align center
          color: #ffffff;
          padding 0 0 40px
          font-size 36px
        }
      }
      .right{
        flex 1
        padding 60px
        .el-button{
          width 180px
        }
        .title{
          font-size 25px
          color #409eff;
          font-family 'PingFangSC'
          height 60px;
        }
      }
      .btn-item{
        text-align center
        padding-top 40px
      }
    }
    .footer{
      height 30px
    }
  }
</style>
