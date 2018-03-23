<template>
  <div>
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
</template>
<script>
export default {
  data() {
    return {
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
}
</script>
