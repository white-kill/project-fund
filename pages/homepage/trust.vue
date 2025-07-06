<template>
  <view class="box-container">
    <new-nav color="#fff"  title="芝麻信用">
      <template #right>
            <my-img src="/static/money/nav.png" width="136rpx" height="56rpx"></my-img>
      </template>
    </new-nav>
    <scroll-view scroll-y class="tab-con">
      <view class="img-box">
      
      </view>
    </scroll-view>
  </view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.box-container {
   background: #00225F;



  .img-box {
    height: 100%;
    background: url('/static/home/zhima.png') no-repeat 0 0 / 100% 100%;
  }
}
</style>