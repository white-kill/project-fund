<template>
  <view class="box-container">
    <view class="nav-title flex-center">
      <my-img @click="backOne" src="/static/me/me-left.png" width="14rpx" height="32rpx"></my-img>
      <view class="settings flex-one">个人信息</view>
      <my-img src="/static/me/server.png" width="40rpx" height="40rpx"></my-img>

    </view>
    <scroll-view scroll-y class="my-con">
      <view class="info-con">
       <view class="info global-flex avatar">
        <view class="text">头像</view>
        <view class="desc flex-one"></view>
    <right-img></right-img>
       </view>
        <view class="info global-flex normal">
        <view class="text">昵称</view>
        <view class="desc flex-one flex-end">
      张三丰
        </view>
        <right-img></right-img>

       </view>
          <view class="info global-flex normal">
        <view class="text">数字形象</view>
        <view class="desc flex-one"></view>
        <right-img></right-img>

       </view>
          <view class="info global-flex normal">
        <view class="text">支付宝账号</view>
        <view class="desc flex-one flex-end">166******77</view>
       <right-img></right-img>

       </view>
          <view class=" global-flex normal">
        <view class="text">身份信息</view>
        <view class="desc flex-one"></view>
       <right-img></right-img>

       </view>
      </view>
 <view class="global-margin info-con">
  <view class="info global-flex normal">
        <view class="text">我的名片</view>
        <view class="desc flex-one"></view>
    <right-img></right-img>

       </view>
       <view class=" global-flex normal">
        <view class="text">我的主页</view>
        <view class="desc flex-one"></view>
       <right-img></right-img>

       </view>
 </view>
  <view class="info-con">
  <view class="info global-flex normal">
        <view class="text">我的档案</view>
        <view class="desc flex-one"></view>
       <right-img></right-img>

       </view>
       <view class=" global-flex normal">
        <view class="text">我的收藏</view>
        <view class="desc flex-one"></view>
       <right-img></right-img>

       </view>
 </view>
    </scroll-view>

  </view>
</template>

<script setup>
import glbfunc from '/utils/globalFunc.js'
const { backOne } = glbfunc()
</script>

<style lang="scss" scoped>
.box-container {
  background: #F5F5F5;

  .my-con {
    height: calc(100% - 72rpx);
    padding: 32rpx 24rpx;
    .info{
      border-bottom:2rpx solid #F5F5F5
    }
    
    .info-con{
      padding-left: 24rpx;
      background: #fff;
      border-radius: 22rpx;
    }
    .text{
      font-size: 32rpx;
    }
    .desc{
      color: #979797;
    }
    .avatar{
      height: 120rpx;
    }
    .normal{
      height: 100rpx;
    }
    
  }


    .settings {
      margin-left: 20rpx;
      font-size: 32rpx;
      color: #2B2B2B;

    }
  

}
</style>