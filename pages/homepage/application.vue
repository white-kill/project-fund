<template>
<view class="box-container">
  <new-nav isCenter title="应用中心">
    <template #right> 
    <my-img src="/static/money/nav.png" width="148rpx" height="56rpx" ></my-img>
    </template>
  </new-nav>
   <scroll-view scroll-y class="my-con">
    <my-img class="first-top" src="/static/apply/apply-one.png" width="100%" height="98rpx" ></my-img>
    <my-img class="img-gap" src="/static/apply/apply-two.png" width="100%" height="392rpx" ></my-img>
    <my-img  class="img-gap" src="/static/apply/apply-three.png" width="100%" height="742rpx" ></my-img>
    <my-img class="img-gap" src="/static/apply/apply-four.png" width="100%" height="742rpx" ></my-img>
    <my-img class="img-gap" src="/static/apply/apply-five.png" width="100%" height="742rpx" ></my-img>
    <my-img  class="img-gap" src="/static/apply/apply-six.png" width="100%" height="420rpx" ></my-img>
      <view class="text-container global-flex">
    <my-img   src="/static/apply/bottom.png" width="22rpx" height="2rpx" ></my-img>
    <view class="text-title"> 生活好服务，尽在支付宝 </view>
    <my-img   src="/static/apply/bottom.png" width="22rpx" height="2rpx" ></my-img>

  </view>
   </scroll-view>
    <!-- <uv-image src="/static/iamge/test3.png" height="392rpx" mode="aspectFit"></uv-image> -->
</view>

</template>
<script setup></script>
<style lang="scss" scoped>

.box-container{
   background: url('/static/apply/apply-bac.jpg') no-repeat center center / cover;
   .first-top{
    margin-top: 38rpx;
   }
.text-container{
    padding-top: 48rpx;
 .text-title{
color: #B2B6B7;
 padding: 0 18rpx 0 18rpx;
 }
}
}
</style>