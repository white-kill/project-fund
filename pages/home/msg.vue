<template>
  <view class="box-container">
    <scroll-view scroll-y class="scroll-height">

      <view class="nav-title flex-center">
        消息
        <view class="flex-one clear-left">
          <my-img height="46rpx" width="46rpx" src="/static/me/clear.png"></my-img>
        </view>
        <my-img height="48rpx" width="44rpx" src="/static/msg/peo.png"></my-img>
        <my-img class="plus-margin" height="46rpx" width="46rpx" src="/static/msg/plus.png"></my-img>
      </view>
      <my-search class="search-area" :is-blue="false" placeholder="搜索你的好友、最近转账联系人等"></my-search>
      <view class="msg-con">
        <view class="msg flex-center ">
          <my-img height="90rpx" width="90rpx" src="/static/msg/bell.png"> </my-img>
          <view class="msg-right">
            消息盒子
            <view class="down-text">重要服务通知 | 支付消息、服务通知都...</view>
          </view>

        </view>

      </view>
    </scroll-view>
  </view>
  <my-tab :current="currentTab"></my-tab>

</template>
<script setup>
import {
  onShow, onLoad
} from '@dcloudio/uni-app'
import { ref } from 'vue'
const currentTab = ref(3)
onLoad(() => {
  uni.hideTabBar({
    animation: false,
    fail: () => {
      // 捕获报错
    }
  });
})
onShow(() => {
  currentTab.value = 3
})
</script>
<style lang="scss" scoped>
.box-container {
  height: calc(100% - var(--global-tab-height));
  background: url('/static/apply/apply-bac.jpg') no-repeat 0 0 / 100% 100%;
  .msg-con {
    padding: 0 24rpx;

    .msg {
      padding: 0 24rpx;
      background: #fff;
      border-radius: 24rpx;
      height: 150rpx;

      .msg-right {
        padding-left: 24rpx;
      }

      view {
        font-size: 32rpx;
      }

      .down-text {
        font-size: 28rpx;
        color: #ADADAD;
      }

    }
  }

  .search-area {
    padding: 62rpx 0 40rpx 0;
  }

  .clear-left {
    margin-left: 18rpx;
  }

  .plus-margin {
    margin: 0 0 0 40rpx;

  }

  .scroll-area {
    height: 100%;
  }

  .nav-title {
    font-size: 36rpx;
    color: #2D3035;
  }
}
</style>
