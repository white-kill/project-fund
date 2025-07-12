<template>
  <view class="box-container">
    <new-nav title="信用卡还款">
      <template #right>
        <my-img src="/static/homeIcon/right.png" height="56rpx" width="136rpx"></my-img>
      </template>
    </new-nav>
    <view class="nav-bot">
      <ice-img src="/static/homeIcon/cred.png"></ice-img>
    </view>
  </view>
</template>
<script setup></script>
<style lang="scss" scoped>
.box-container {
  background: #F1F4FF;

  .nav-bot {
    margin-top: 30rpx;
  }
}
</style>