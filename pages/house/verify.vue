<template>
  <view class="box-container">
    <new-nav title="身份验证"></new-nav>
    <view class="img-con">
      <my-img src="/static/house/verify-house.png" height="148rpx" width="148rpx"></my-img>
    </view>
    <view class="text-con flex-one">
      <view class="text-one">住房和城乡建设部住房公积金监管司 申请</view>
      <view class="flex-center bold-font">

        对你进行身份验证，请确保为
        <view class="bold-font blue">张三丰</view>
        本人操作
      </view>
      <view class="text-one">用于根据住房和城乡建设部住房公积金监管司的实名制管理要
        求提供服务</view>

    </view>
    <view class="agree-con flex-center">
      同意
      <uv-text margin="0 0 0 12rpx" text="《认证服务协议》" color="#1A73E7" size="24rpx"></uv-text>
    </view>
    <view class="btn-area">
      <uv-button @click="submit" color="var(--input-border)" shape="circle" text="同意协议并认证"></uv-button>
      <uv-button class="btn-top" shape="circle" text="暂不认证"></uv-button>
    </view>
  </view>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const msg = ref('logs')
const submit = () => {
 uni.redirectTo({
  url : '/pages/house/faceLogo'
 })
}

</script>

<style lang="scss" scoped>
.box-container {
  .img-con {
    padding: 94rpx 0 54rpx 28rpx;
  }

  .text-con {
    padding: 0 30rpx;

    .text-one {
      color: #2B2B2B;
    }

    .bold-font {
      margin: 8rpx 0;
      font-size: 32rpx;
      font-weight: bold;
    }

    .blue {
      color: var(--text-blue);
      margin-right: 12rpx;
    }
  }

  .agree-con {
    padding: 0 0 42rpx 30rpx;
    font-size: 26rpx;
    color: #272727;
  }

  .btn-area {
    padding: 0 36rpx;

    .btn-top {
      margin: var(--global-pad) 0 100rpx 0;
    }
  }
}
</style>