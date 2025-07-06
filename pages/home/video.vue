<template>	
  <view class="box-container">
    <scroll-view scrolly class="scroll-height">
      <view class="tab-area flex-center">
        <my-img src="/static/video/video-two.png" height="26rpx" width="34rpx"></my-img>
        <view class="flex-one global-flex">
          <uv-tabs :list="list" lineWidth="30" lineColor="#fff" :activeStyle="{
            color: '#fff',
            fontSize : '34rpx',
            transform: 'scale(1.05)'
          }" :inactiveStyle="{
            color: '#606266',
             fontSize : '32rpx',
            transform: 'scale(1)'
          }"></uv-tabs>
        </view>
        <my-img src="/static/video/video-three.png" height="36rpx" width="36rpx"></my-img>

      </view>
      <my-img src="/static/video/video-one.png" height="1298rpx"></my-img>
    </scroll-view>
  </view>
  <my-tab :current="currentTab"></my-tab>
</template>
<script setup>
import {
  onShow, onLoad,onHide
} from '@dcloudio/uni-app'
import { ref } from 'vue'
const currentTab = ref(2)
onLoad(() => {
  uni.hideTabBar({
    animation: false,
    fail: () => {
      // 捕获报错
    }
  });
})

onShow(() => {
  currentTab.value = 2
})
const list = [{
  name: '关注',  
  id: 1
}, {
  name: '短剧',
  id: 2
}, {
  name: '直播',
  id: 3
}, {
  name: '发现',
  id: 4
}]
</script>
<style lang="scss" scoped>
.box-container {
  padding-top: var(--nav-top);
  background: linear-gradient(90deg, #1A1C29 0%, #181720 28%, #180D11 54%, #190C13 100%, #190C13 100%);
  height: calc(100% - var(--global-tab-height));
  
  .tab-area {
    padding: 0 24rpx;
    // height: 64rpx
  }
}
</style>
