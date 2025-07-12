<template>
  <view class="box-container">
    <view class="nav-title" style="background: #1677FF;">
      <view class="global-flex">
        <my-img src="/static/money/nav-left.svg" height="54rpx" width="54rpx"></my-img>
        <my-search placeholder="我的基金" :is-blue="false" v-model="searchValue" @click="goNext" isReadonly></my-search>
        <my-img src="/static/money/nav-right.png" height="46rpx" width="40rpx"></my-img>
      </view>
    </view>
    <scroll-view scroll-y class="tab-con">
      <ice-img src="/static/money/money-two.png"></ice-img>
      <ice-img src="/static/money/money-three.png"></ice-img>
      <ice-img src="/static/money/money-four.png"></ice-img>
      <ice-img src="/static/money/money-five.png"></ice-img>
      <ice-img src="/static/money/money-six.png"></ice-img>
      <ice-img src="/static/money/money-seven.png"></ice-img>
      <ice-img src="/static/money/money-eight.png"></ice-img>
      <ice-img src="/static/money/money-nine.png"></ice-img>
    </scroll-view>
  </view>
  <my-tab :current="currentTab"></my-tab>

</template>
<script setup>
import {
  onShow, onLoad
} from '@dcloudio/uni-app'
import { ref } from 'vue'
onLoad(() => {
  uni.hideTabBar({
    animation: false,
    fail: () => {
      // 捕获报错
    }
  });
})
const goNext = () => {
  uni.navigateTo({
    url: '/pages/homepage/search'
  })
}
const searchValue = ref(null)
const currentTab = ref(1)
onShow(() => {
  currentTab.value = 1
})
</script>
<style lang="scss" scoped>
.box-container {
  height: calc(100% - var(--global-tab-height));
  padding-top: 0;
  padding-bottom: 0;
  // background: linear-gradient(to right, #2C9EFE, #208AFE, #026AFD, );


  .price-area {
    padding: 40rpx 0 rpx 0;

    .num {
      font-size: 58rpx;
      font-weight: bold;
      color: #fff;
    }

    .eyes {
      margin: 0 28rpx;
    }

    .desc {
      font-size: 26rpx;
      color: #fff;
      opacity: 0.5;
      line-height: 1;
    }

    display: flex;

    .border-gap {
      margin: 0 24rpx;
      width: 0;
      height: 92rpx;
      border: 1rpx solid #FFFFFF;
      opacity: 0.5;
    }




  }

  .money-one {
    padding-left: 24rpx;
    padding-right: 24rpx;


    .price-area {
      padding-top: 40rpx;
    }


  }
}
</style>
