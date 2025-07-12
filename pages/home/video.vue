<template>
  <view class="box-container">
    <view class="nav-title flex-center">
      <my-img src="/static/video/video-two.png" height="26rpx" width="34rpx"></my-img>
      <view class="flex-one global-flex">
        <uv-tabs :list="list" lineWidth="30" lineColor="#fff" :activeStyle="{
          color: '#fff',
          fontSize: '34rpx',
          transform: 'scale(1.05)'
        }" :inactiveStyle="{
          color: '#606266',
          fontSize: '32rpx',
          transform: 'scale(1)'
        }"></uv-tabs>
      </view>
      <my-img src="/static/video/video-three.png" height="36rpx" width="36rpx"></my-img>

    </view>
    <scroll-view scroll-y class="tab-con">
      <view class="swiper-con">
        <uv-swiper imgMode="widthFix" :indicatorStyle="{'bottom':'-25rpx'}"   @change="e => current = e.current" height="260rpx" radius="10" :list="myList" indicator
          indicatorMode="line" circular>
          <template #indicator>
            <view class="indicator">
              <view class="indicator__dot" v-for="(item, index) in myList" :key="index"
                :class="[index === current && 'indicator__dot--active']"></view>
            </view>
          </template>
        </uv-swiper>
      </view>

      <ice-img src="/static/video/video-one.png"></ice-img>
      <ice-img src="/static/video/video-sec.png"></ice-img>
      <ice-img src="/static/video/video-third.png"></ice-img>

    </scroll-view>
  </view>
  <my-tab :current="currentTab"></my-tab>
</template>
<script setup>
import {
  onShow, onLoad, onHide
} from '@dcloudio/uni-app'
import img1 from '/static/video/swiper-one.png'
import img2 from '/static/video/swiper-two.png'

import { ref } from 'vue'
const currentTab = ref(2)
const myList = ref([img1,img2])

onLoad(() => {
  uni.hideTabBar({
    animation: false,
    fail: () => {
      // 捕获报错
    }
  });
})
const current = ref(0)
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
  height: calc(100% - var(--global-tab-height));
  padding-bottom: 0;
  background: linear-gradient(90deg, #1A1C29 0%, #181720 28%, #180D11 54%, #190C13 100%, #190C13 100%);

 

  .swiper-con {
    padding:50rpx 16rpx;
  }

  @mixin flex($direction: row) {
    display: flex;
    flex-direction: $direction;
  }

  .indicator {
    @include flex(row);
    justify-content: center;

    &__dot {

      height: 5rpx;
      width: 6rpx;
      border-radius: 3rpx;
      opacity: 0.5;
      margin: 0 5px;
      background-color: #fff;
      transition: background-color 0.3s;

      &--active {
        width: 25rpx;
        opacity: 1;
        border-radius: 10rpx;
        background-color: #fff;
      }
    }
  }


}
</style>
