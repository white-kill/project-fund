
<template>
  <view class="box-container">
    <new-nav  title="转账">
      <template #right>
       <my-img src="/static/money/nav.png" width="136rpx" height="56rpx" ></my-img>
      
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
  background: linear-gradient(to bottom, #DBEBFA 10%, #F0F2F6 50%);


  .img-box {
    height: 100%;
    background: url('/static/homeIcon/transfer.png') no-repeat 0 0 / 100% 100%;
  }
}
</style>