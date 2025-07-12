<template>
  <view class="box-container">
    <view class="header">
      <view class="nav flex-center nav-pad">
        <my-img class="me-right" src="/static/house/left-white.png" width="14rpx" height="32rpx"></my-img>
        <uv-text text="我的账户" color="#fff" size="36rpx"></uv-text>
        <my-img class="me-right" height="56rpx" width="56rpx" src="/static/house/star.png"></my-img>
        <my-img height="56rpx" width="136rpx" src="/static/house/circle.png"></my-img>
      </view>
    </view>
    <scroll-view scroll-y class="scroll-con">

      <view class="title-area flex-center">
        <view class="border"></view>
        信息查询
      </view>
      <view class="grid-con ">
        <view class="flex-box item-bottom">
          <view class="grid-item item-right">
            <my-img height="100rpx" width="100rpx" src="/static/house/server-one.png"></my-img>
            账户信息
          </view>
          <view class="grid-item item-right">
            <my-img height="100rpx" width="100rpx" src="/static/house/server-two.png"></my-img>
            缴存明细
          </view>
          <view class="grid-item">
            <my-img height="100rpx" width="100rpx" src="/static/house/server-three.png"></my-img>
            提取明细
          </view>
        </view>
        <view class="flex-box">
          <view class="grid-item item-right">
            <my-img height="100rpx" width="100rpx" src="/static/house/server-four.png"></my-img>
            贷款信息
          </view>
          <view class="grid-item item-right">
            <my-img height="100rpx" width="100rpx" src="/static/house/server-five.png"></my-img>
            还贷明细
          </view>
          <view class="grid-item">
            <my-img height="100rpx" width="100rpx" src="/static/house/server-six.png"></my-img>
            <view>个税抵扣</view>
            <view>填报信息</view>

          </view>
        </view>
      </view>
      <view class="title-area flex-center">
        <view class="border"></view>
        业务办理
      </view>
      <view class="grid-con ">
        <view class="flex-box">
          <view class="grid-item item-right">
            <my-img height="100rpx" width="100rpx" src="/static/house/server-seven.png"></my-img>
            转移接续
          </view>
          <view class="grid-item " style="text-align: center;">
            <my-img height="100rpx" width="100rpx" src="/static/house/server-eight.png"></my-img>
            信息查询授权
          </view>

        </view>

      </view>
      <view class="title-area flex-center">
        <view class="border"></view>
        常用工具
      </view>
      <view class="grid-con " style="padding-bottom: 0;">
        <view class="flex-box item-bottom">
          <view class="grid-item item-right">
            <my-img height="100rpx" width="100rpx" src="/static/house/server-none.png"></my-img>
            存款利率
          </view>
          <view class="grid-item item-right">
            <my-img height="100rpx" width="100rpx" src="/static/house/server-ten.png"></my-img>
            贷款利率
          </view>
          <view class="grid-item">
            <my-img height="100rpx" width="100rpx" src="/static/house/server-eleven.png"></my-img>
            房贷计算
          </view>
        </view>
        <view class="flex-box">
          <view class="grid-item">
            <my-img height="100rpx" width="100rpx" src="/static/house/server-twelve.png"></my-img>
            <view style="text-align: center;">全国住房公积金年报</view>
          </view>

        </view>
      </view>
    </scroll-view>
  </view>
  <house-tab :current="currentTab"></house-tab>
</template>

<script setup>
import {
  onShow, onLoad
} from '@dcloudio/uni-app'
import { ref } from 'vue'
const id = ref(null)
const goHome = () => {
  uni.navigateTo({
    url: '/pages/house/verify'
  })

}
const currentTab = ref(1)
onLoad(() => {
  uni.hideTabBar({
    animation: false,
    fail: () => {
      // 捕获报错
    }
  });
})

onShow(() => {
  currentTab.value = 1
})
</script>

<style lang="scss" scoped>
.box-container {
  height: calc(100% - var(--global-tab-height));
  padding-bottom: 0;

  .scroll-con {
    height: calc(100% - 170rpx);
  }

  .title-area {
    padding: 50rpx 24rpx 24rpx 24rpx;
    color: var(--title-text);
    font-weight: bold;
    font-size: 32rpx;

    .border {
      margin-right: 20rpx;
      width: 8rpx;
      height: 28rpx;
      background: linear-gradient(180deg, #285FDD 0%, #6694F6 100%);

    }
  }

  .header {
    padding-top: var(--nav-top);
    padding-bottom: 20rpx;
    background: url('/static/house/bac-me.png') no-repeat 0 0 / 100% 100%;
    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20rpx;
    }

    .me-right {
      margin-right: 12rpx;
    }
  }
}

.more-info {
  margin: 20rpx 0;
}

.grid-con {
  padding: 0 50rpx 30rpx 50rpx;

  .grid-item {
    width: 180rpx;
    display: flex;
    flex-direction: column;
    align-items: center
  }

  .item-right {
    margin-right: calc(calc(100% - 540rpx) / 2);
  }

  .item-bottom {
    margin-bottom: 40rpx;
  }
}
</style>