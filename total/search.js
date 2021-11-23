wx.cloud.init()
var db=wx.cloud.database()
const app = getApp()
import Toast from '../miniprogram_npm/@vant/weapp/toast/toast';
import Dialog from '../miniprogram_npm/@vant/weapp/dialog/dialog'
Page({
	data: {
		value: '',
		show: false,
		columns: ['CSDN'],
		getdata: " "
	  },
	  onChange(e) {
		this.setData({
		  value: e.detail,
		});
		db.collection("C_function").doc(this.data.value).get({
			success: res=>{
				console.log(res)
				this.setData({
					getdata:res.data
				})
			}
		})
	  },
	  onSearch() {
		Toast('搜索' + this.data.value);
		
	  },


	onShow() {
		this.getTabBar().init();
	},

	onConfirm(event) {
		wx.navigateTo({
		  url: '../total/csdn/csdn',
		})
	  },
	
	  showPopup() {
		this.setData({ show: true });
	  },
	
	  onClose() {
		this.setData({ show: false });
	  },
	  onClick() {
        Dialog.alert({
          title: this.data.value,
		  message: this.data.getdata.USE,
        }).then(() => {
          // on close
        });
	},
	getUserInfo(event) {
		console.log(event.detail);
	  },

	
	

	
})

