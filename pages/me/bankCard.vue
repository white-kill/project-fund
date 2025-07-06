<template>
  <view class="box-container">
    <new-nav style="background-color: #fff;" title="银行卡">
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
  background: #EFF2F6;


  .img-box {
    height: 100%;
    background: url('/static/me/bankCard.png') no-repeat 0 0 / 100% 100%;
  }
}
</style>