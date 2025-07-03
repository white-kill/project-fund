<template>
  <view class="box-container">
    <new-nav color="#fff" title="余额宝" isCenter>
      <template #right>
        <my-img src="/static/me/yuebao.png" height="8rpx" width="28rpx"></my-img>
      </template>
    </new-nav>
    <scroll-view scroll-y class="tab-con">
      <view style="height: 100%;">
      <ice-img src="/static/me/balance.png" />

      </view>
    </scroll-view>
  </view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.box-container {
  background: linear-gradient(to bottom, #ff792e 50%, #FFFFFF 50%);

}
</style>