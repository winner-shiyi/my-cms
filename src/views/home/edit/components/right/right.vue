<template>
  <div></div>
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
<style lang="stylus" scoped>
.center-config{
}
</style>
