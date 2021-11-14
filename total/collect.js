const app = getApp()

Page({
	data: {
		active: 1,
		switchTitle1: '名称',
    	switchTitle2: '时间',
   	 	itemTitle: '排序方式',
    	option1: [
      		{ text: '收藏夹1', value: 0 },
     	 	{ text: '收藏夹2', value: 1 },
      		{ text: '收藏夹3', value: 2 },
    	],
    	value1: 0,
	},

	onShow() {
		this.getTabBar().init();
	},
	
	onChange(event) {
		wx.showToast({
		  title: `切换到 ${event.detail.name}`,
		  icon: 'none',
		});
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
})
