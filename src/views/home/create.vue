<template>
  <div class="cms-create">
    <div class="title">添加页面</div>
    <el-form
      :model="cmsPageValidateForm"
      ref="cmsPageValidateForm"
      label-width="100px"
    >
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
            v-for="item in projectData"
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
      <el-form-item>
        <el-button type="primary" @click="submitForm('cmsPageValidateForm')">提交</el-button>
        <el-button @click="resetForm('cmsPageValidateForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/babel">
export default {
  data() {
    return {
      cmsPageValidateForm: {
        pageName: '',
        projectName: '',
      },
      projectData: [],
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const { pageName, projectName } = this.cmsPageValidateForm
          const param = {
            pageName,
            projectName,
          }
          this.$ajax.createPage(param).then((result) => {
            const id = result.id
            this.$router.push({path: `/home/edit/${id}`})
          }).catch((err) => {
            this.$message.error(err.msg)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
  mounted() {
    this.$ajax.queryProjectName({type: 'projectName'}).then((result) => {
      this.projectData = result.list
    }).catch((err) => {
      this.$message.error(err.msg)
    })
  },
}
</script>

<style lang="stylus">
  .cms-create{
    background-color #fff
    padding-bottom 50px
    .title{
      height 68px
      line-height 68px
      margin 0 20px
      border-bottom 1px solid #e5e8ed
      font-size 16px
    }
    .el-form{
      padding-top 20px
    }
    .page-item{
      width 500px
    }
  }
</style>