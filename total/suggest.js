import Toast from '../miniprogram_npm/@vant/weapp/toast/toast';

Page({

  data: {
    textareaAValue:''
  },

textareaAInput(e) 
{
    this.setData({
        textareaAValue: e.detail.value
      })
},
  formSubmit: function (e) {
    if(this.data.textareaAValue==''){
        wx.showToast({
          title: '提交内容不能为空',
          icon:'none',
        })
      }else
      {
            wx.showLoading({
              title: '提交中',
            })
            setTimeout(function () {
              wx.hideLoading()
              wx.showToast({
                title: '提交成功',
                icon: 'success',
                duration: 2000
              })
            }, 2000)

                wx.switchTab({
                  url: '/total/mine',
                })
      }
    //处理提交数据逻辑

  }
});