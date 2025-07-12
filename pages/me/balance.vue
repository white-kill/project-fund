<template>
  <view class="box-container">
    <new-nav color="#fff"  title="余额宝">
      <template #right>
        <my-img src="/static/me/yuebao.png" height="8rpx" width="28rpx"></my-img>

      
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
   background: linear-gradient(to bottom, #ff792e 50%, #FFFFFF 50%);



  .img-box {
    height: 100%;
    background: url('/static/me/balance.png') no-repeat 0 0 / 100% 100%;
  }
}
</style>