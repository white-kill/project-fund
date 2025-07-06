<template>
	<view class="box-container">
		<new-nav >
			<template v-slot:right>
				帮助
			</template>
		</new-nav>
		<view class="box-con">
			<view class="img-top">
				<uv-image src="/static/image/login-life.png" mode="aspectFit" width="520rpx" height="92rpx"></uv-image>
			</view>
			<view class="flex-one hello">你好，欢迎使用支付宝</view>
			<view style="width: 100%;">
				<uni-easyinput @focus="open" :adjust-position="false" placeholder="请输入手机号/邮箱" v-model="psdValue">
					<template v-slot:left>
						<view class="prefix-text">
							账号
						</view>

					</template>
				</uni-easyinput>

				<view class="btn-area">
					<uv-button :disabled="!psdValue" @click="goNext" shape="circle"
						:color="isDisabled ? color1 : color2" text="下一步"></uv-button>
				</view>
				<view class="global-flex  more">
					注册账号
					<text class="text-margin">
						找回账号
					</text>
				</view>
			</view>
		</view>
		<uv-popup ref="popup" mode="bottom"  round="40rpx">
			<view style="height: 1000rpx;" class="box-con popup-con">
				<view style="width: 100%;">
					<uni-easyinput ref="myInput" @input="onInputChange" placeholder="请输入手机号/邮箱" v-model="psdValue">
						<template v-slot:left>
							<view class="prefix-text">
								账号
							</view>
						</template>
					</uni-easyinput>
				</view>
				<view class="btn-area flex-one" style="width: 100%;">
					<uv-button :disabled="isDisabled" @click="goNext" shape="circle"
						:color="isDisabled ? color1 : color2" text="下一步"></uv-button>
				</view>
				<view class="global-flex  more">
					注册账号
					<text class="text-margin">
						找回账号
					</text>
				</view>

			</view>
		</uv-popup>
	</view>
</template>
<script setup>
import { ref } from 'vue'
const popup = ref(null)
const myInput = ref(null)

const isDisabled = ref(true)
const psdValue = ref('')
const color1 = ref('#B3D7FF')
const open = () => {
	popup.value.open()
	setTimeout(() => {
		myInput.value.onFocus()
	}, 500)
}
const color2 = ref('#007aff')
const goNext = () => {
	if (!isDisabled.value) {
		uni.navigateTo({
			url: '/pages/login/psd'
		})
	}

}
const onInputChange = (e) => {

	// 如果输入框有内容，解除禁用状态
	isDisabled.value = e === ''
}
</script>
<style lang="scss" scoped>
:deep(.is-input-border) {
	border-radius: 50rpx;
	padding: 0 30rpx 0 20rpx;

}

.prefix-text {
	margin: 0 48rpx 0 16rpx;
}
.popup-con{
	margin-top: 40rpx;
}
.box-con {
	padding: 0 36rpx;
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;

	.img-top {
		padding-top: 94rpx;
	}


	.hello {
		margin-top: 42rpx;
		font-size: 30rpx;
		color: #2B2B2B
	}

	.btn-area {
		padding-top: 34rpx;


	}

	.more {
		color: $more-color;
		padding: 110rpx 0 40rpx 0;
		font-size: 28rpx;

		.text-margin {
			margin-left: 52rpx;
		}
	}

}
</style>