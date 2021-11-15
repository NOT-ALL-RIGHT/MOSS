const app = getApp()
import Toast from '../miniprogram_npm/@vant/weapp/toast/toast'
Page({
	data: {
		value: '',
		show: false,
		columns: ['CSDN', 'Github']
	  },
	  onChange(e) {
		this.setData({
		  value: e.detail,
		});
	  },
	  onSearch() {
		Toast('搜索' + this.data.value);
	  },
	  onClick() {
		Toast('搜索' + this.data.value);
	  },

	onShow() {
		this.getTabBar().init();
	},

	onConfirm(event) {
		const { picker, value, index } = event.detail;
		Toast(`当前值：${value}, 当前索引：${index}`);
	  },
	
	  showPopup() {
		this.setData({ show: true });
	  },
	
	  onClose() {
		this.setData({ show: false });
	  },
	
})

