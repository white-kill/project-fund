<template>
  <view class="box-container">
    <new-nav color="#fff" title="余额">
      <template #right>
        <my-img src="/static/me/yuebao.png" height="8rpx" width="28rpx"></my-img>
      </template>
    </new-nav>
    <scroll-view scroll-y class="tab-con">
      <view class="img-box">
        <view class="text-con">
          0.00
        </view>

      </view>
    </scroll-view>
  </view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.box-container {
  background: var(--input-border);

  .img-box {

    height: 100%;
    background: url('/static/me/remain.png') no-repeat 0 0 / 100% 100%;
    display: flex;
    justify-content: center;

    .text-con {
      padding-top: 200rpx;
      font-weight: bold;
      font-size: 88rpx;
    }
  }
}
</style>