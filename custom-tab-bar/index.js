Component({
	data: {
		active: 0,
		list: [
			{
				icon: 'search',
				text: '搜索',
				url: '/total/search'
			},
			{
				icon: 'star-o',
				text: '收藏',
				url: '/total/collect'
			},
			{
				icon: 'manager-o',
				text: '我的',
				url: '/total/mine'
			}
		]
	},

	methods: {
		onChange(event) {
			this.setData({ active: event.detail });
			wx.switchTab({
				url: this.data.list[event.detail].url
			});
		},

		init() {
			const page = getCurrentPages().pop();
			this.setData({
				active: this.data.list.findIndex(item => item.url === `/${page.route}`)
			});
		}
	}
});
