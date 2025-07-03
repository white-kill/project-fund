<script>
export default {

	onLaunch: function () {

	},
	onShow: function () {
		uni.hideTabBar({
			animation: false,
			fail: () => {
				// 捕获报错，防止没有 tabbar 页面调用后控制台报错
			}
		});
	},
	onHide: function () {

	}
}
</script>

<style>
/*每个页面公共css */
</style>
