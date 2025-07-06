<template>
	<view class="box-container">
		<new-nav>
			<template #right>
				帮助

			</template>
		</new-nav>
		<view class="box-con">
			<view class="img-top">
				<uv-image src="/static/image/login-life.png" mode="aspectFit" width="520rpx" height="92rpx"></uv-image>

			</view>
			<view class="flex-one hello">你好，欢迎使用支付宝</view>

			<view class="num-area global-flex">
				<uv-image src="/static/image/logo2.png" mode="aspectFit" width="52rpx" height="52rpx"></uv-image>
				<view class="phone">
					266***@qq.com
				</view>
			</view>
			<view style="width: 100%;">
				<uni-easyinput @focus="open" :adjust-position="false" :passwordIcon=false
					:type="isPsd ? 'password' : 'text'" placeholder="请输入登录密码" v-model="psdValue" @input="onInputChange">
					<template v-slot:right>
						<view class="global-flex psd-input">
							<uv-image v-if="!isPsd" src='/static/login/light.png' @click="touchPsd" width="34rpx"
								height="26rpx"></uv-image>
							<uv-image v-else src='/static/image/psd-eyes.png' @click="touchPsd" mode="aspectFit"
								width="28rpx" height="14rpx"></uv-image>
							<uv-image class="psd-img" src="/static/login/psd-line.png" width="2rpx"
								height="28rpx"></uv-image>
							忘记密码
						</view>

					</template>
				</uni-easyinput>

				<view class="btn-area">
					<uv-button :disabled="!psdValue" @click="goNext" shape="circle"
						:color="isDisabled ? color1 : color2" text="登录"></uv-button>
				</view>
				<view class="global-flex  more">
					更多选项

				</view>
			</view>

		</view>
		<uv-popup ref="popup" mode="bottom" round="40rpx">
			<view style="height: 1000rpx;" class="box-con popup-con">
				<view style="width: 100%;">
					<uni-easyinput ref="myInput" :passwordIcon=false :type="isPsd ? 'password' : 'text'"
						placeholder="请输入登录密码" v-model="psdValue" @input="onInputChange">
						<template v-slot:right>
							<view class="global-flex psd-input">
								<uv-image v-if="!isPsd" src='/static/login/light.png' @click="touchPsd" width="34rpx"
									height="26rpx"></uv-image>
								<uv-image v-else src='/static/image/psd-eyes.png' @click="touchPsd" mode="aspectFit"
									width="28rpx" height="14rpx"></uv-image>
								<uv-image class="psd-img" src="/static/login/psd-line.png" width="2rpx"
									height="28rpx"></uv-image>
								忘记密码
							</view>

						</template>
					</uni-easyinput>
				</view>
				<view class="btn-area flex-one" style="width: 100%;">
					<uv-button :disabled="isDisabled" @click="goNext" shape="circle"
						:color="isDisabled ? color1 : color2" text="下一步"></uv-button>
				</view>
				<view class="global-flex  more">
					更多选项

				</view>

			</view>
		</uv-popup>
	</view>
</template>
<script setup>
import { ref } from 'vue'
const isDisabled = ref(true)
const psdValue = ref('')
const color1 = ref('#B3D7FF')
const isPsd = ref(true)
const color2 = ref('#007aff')
const popup = ref(null)
const myInput = ref(null)

const open = () => {
	popup.value.open()
	setTimeout(() => {
		myInput.value.onFocus()
	}, 500)
}
const touchPsd = () => {
	isPsd.value = !isPsd.value
}
const goNext = () => {
	if (!isDisabled.value) {
		uni.relaunch({
			url: '/pages/home/home'
		})
	}
}
const onInputChange = (e) => {
	// 如果输入框有内容，解除禁用状态
	isDisabled.value = e === '';
}
</script>
<style lang="scss" scoped>
:deep(.is-input-border) {
	border-radius: 50rpx;
	padding: 0 30rpx 0 20rpx;
}

.popup-con {
	margin-top: 40rpx;
}

.psd-input {
	.psd-img {
		margin: 0 24rpx;
	}

	color: #486A97;
}

.box-con {
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 36rpx 0 36rpx;

	.hello {
		margin-top: 42rpx;
		font-size: 30rpx;
		color: #2B2B2B
	}

	.img-top {
		padding-top: 94rpx;
	}

	.num-area {
		padding-bottom: 60rpx;

		.phone {
			font-weight: bold; 
			font-size: 52rpx;
			color: #2B2B2B;
			margin-left: 24rpx;
		}
	}

	.btn-area {
		padding-top: 34rpx;


	}

	.more {
		color: #4A6C92;
		padding: 50rpx 0 40rpx 0;
		font-size: 28rpx;
	}

}
</style>