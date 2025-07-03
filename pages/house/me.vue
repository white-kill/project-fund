<template>
  <view class="box-container">
    <scroll-view scroll-y class="scroll-height">
      <view class="header">
        <view class="nav flex-center nav-pad">
          <my-img class="me-right" src="/static/house/left-white.png" width="14rpx" height="32rpx"></my-img>
          <uv-text text="我的账户" color="#fff" size="36rpx"></uv-text>
          <my-img class="me-right" height="62rpx" width="62rpx" src="/static/house/star.png"></my-img>
          <my-img height="56rpx" width="136rpx" src="/static/house/circle.png"></my-img>
        </view>
         <view v-if="!id" class="card">
        <view class="account-info">
          <view class="avatar global-flex">
          <my-img src="/static/house/avatar.svg" width="80rpx" height="80rpx"></my-img>
          </view>
          <view class="button-login">
        <uv-button @click="id =1" text="请登录" color="linear-gradient(to right, #1F57D8, #6390F5)" shape="circle"></uv-button>
          </view>
        </view>
      
      </view>
       <view v-else class="more-info">
          <my-img src="/static/house/id.png" height="402rpx"></my-img>
       </view>
      <view class="more" @click="goHome">
          <my-img src="/static/house/my-account.png" height="220rpx"></my-img>

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
const goHome = ()=>{
  uni.navigateTo({
     url: '/pages/house/verify'
  })

}
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
</script>

<style lang="scss" scoped>
.box-container {
  height: calc(100% - var(--global-tab-height));
  padding-top: 0;

  .header {
    padding-top: var(--nav-top);
    height: 396rpx;
    background: url('/static/house/bac-me.png') no-repeat center center / cover;
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
.more-info{
  margin: 20rpx 0;
}
.card {
  background-color: #fff;
  margin: 20rpx;
  padding:80rpx 0 ;
  border-radius: 10rpx;
  box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.1);
 .more{
  margin-top: 28rpx;
 }
  .account-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20rpx;
    .avatar {
      width: 120rpx;
      height: 120rpx;
      border-radius: 50%!important ;
      background: #D8D8D8;
    }
   .button-login{
    padding-top: 50rpx;
    width: 500rpx;
   }
  }

  
}
</style>