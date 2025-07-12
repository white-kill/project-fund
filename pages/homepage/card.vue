<template>
  <view class="box-container">
    <new-nav title="收付款">
      <template #right>
        <my-img src="/static/home/shenglue.svg" width="28rpx" height="8rpx"></my-img>
      </template>
    </new-nav>
    <scroll-view scroll-y class="scroll-con">
      <my-img height="200rpx" src="/static/home/card-one.svg"></my-img>
      <my-img height="262rpx" src="/static/home/member.svg"></my-img>
      <my-img height="104rpx" src="/static/home/tuijian.svg"></my-img>
      <my-img height="2278rpx" src="/static/home/buy.svg"></my-img>
      <view class="bottom">已经到底了</view>

    </scroll-view>
  </view>
</template>
<script setup></script>
<style lang="scss" scoped>
.box-container {
  .scroll-con {
    height: calc(100% - var(--nav-height));

    .bottom {
      margin-top: 56rpx;
      text-align: center;
      color: #CECECE;
    }
  }

  background: #F5F5F5;

  .nav-bot {
    margin-top: 50rpx;
  }
}
</style>