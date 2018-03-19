<template>
  <div class="cms-login">
    <div class="blank"></div>
    <div class="login-main">
      <div class="left">
        <div class="name"><i class="icon-cms-hello"></i> CMS</div>
        <h2>欢迎您</h2>
      </div>
      <div class="right">
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
          <el-form-item prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item prop="age">
            <el-input v-model.number="ruleForm2.age" placeholder="账号"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
            <!-- <el-button @click="resetForm('ruleForm2')">重置</el-button> -->
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!-- <div class="demo">
      登录页面
      <el-button type="success" @click="clickFn">成功按钮</el-button>
    </div> -->
    <div class="blank"></div>
    <footer class="footer">Copyright © 2018 产业互联技术中心</footer>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'))
          } else {
            callback()
          }
        }
      }, 1000)
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm2.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      msg: '登录页面',
      ruleForm2: {
        pass: '',
        checkPass: '',
        age: '',
      },
      rules2: {
        pass: [
          { validator: validatePass, trigger: 'blur' },
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' },
        ],
        age: [
          { validator: checkAge, trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    clickFn() {
      this.$ajax.blogList({aaa: 'ffff'}).then((data) => {
        console.log(data)
      }).catch((err) => {
        console.log(err)
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
        h2{
          text-align center
          color: #c9d3e9;
          font-family: 'PingFangSC';
          font-weight: 200;
          font-size: 18px;
          letter-spacing: 2.63px;
        }
      }
      .right{
        flex 1
        padding 20px
        .el-button{
          width 180px
        }
      }
    }
    .footer{

    }
  }
</style>
