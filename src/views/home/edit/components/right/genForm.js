const fields = [
  {
    label: '上传图片',
    name: 'pictureUrl',
    required: true,
    type: 'uploadImage',
    placeholder: '请上传图片',
  },
  {
    label: '跳转方式',
    name: 'link',
    required: true,
    type: 'textarea',
    max: 100,
    long: true,
    placeholder: '请输入关键结果',
  },
  {
    label: '自动播放',
    name: 'autoPlay',
    required: false,
    type: 'switch',
    checked: false,
  },
]
fields.map((item) => {

})
const opts = {
  field: item,
  form: this.props.form,
}

export const createFormItem = (opts) => {
  return (

  )
}
