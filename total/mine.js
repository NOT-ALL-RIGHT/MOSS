const app = getApp()

Page({
  data: {
	showShare: false,
    options: [
	  { name: '微信', icon: 'wechat', openType: 'share' },
	  { name: 'QQ', icon: 'qq', openType: 'share' },
      { name: '复制链接', icon: 'link' },
      { name: '分享海报', icon: 'poster' },
      { name: '二维码', icon: 'qrcode' },
	],
	userInfo:'',
  },

	onShow() {
		this.getTabBar().init();
	},
	onConfirm() {
		this.selectComponent('#item').toggle();
	  },
	
	  onSwitch1Change({ detail }) {
		this.setData({ switch1: detail });
	  },
	
	  onSwitch2Change({ detail }) {
		this.setData({ switch2: detail });
	  },
	  
	  onClick(event) {
		this.setData({ showShare: true });
	  },
	
	  onClose() {
		this.setData({ showShare: false });
	  },
	
	  onSelect(event) {
		Toast(event.detail.name);
		this.onClose();
	  },
	  login(){
		console.log('点击实现')
		wx.getUserProfile({
		  desc: '必须授权',
		  success:res=>{
			let user =res.userInfo
			console.log("用户信息")
			this.setData({
			  userInfo:user
			})
			
		  },
		  fail(){
			console.log('授权失败')
		  }
		})
	  }
})

