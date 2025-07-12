<template>
  <view class="box-container">
    <new-nav color="#fff" title="芝麻信用">
    </new-nav>
    <scroll-view scroll-y class="tab-con">
      <view class="name-con flex-center">
        <view class="name-left">**丰, 信用优秀 </view>
         <view class="num">666</view>
        <uv-icon  name="arrow-right" color="#fff" size="42rpx"></uv-icon> 

      </view>
    </scroll-view>
  </view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.box-container {
  background: url('/static/home/zhima.png') no-repeat 0 0 / 100% 100%;

  .name-con {
    view{
      color: #fff;
    }
    .num{
      font-size:99rpx;
      font-weight: bold;
    }
    .name-left{
      margin-left: 24rpx;
      font-size:30rpx;
      margin-right: 60rpx;
    }
   
  }
}
</style>