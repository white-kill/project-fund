<template>
  <view class="box-container">
    <view class="relative">
      <my-img height="314rpx" src="/static/house/house-top.png"> </my-img>
      <overlay
        width="80"
        height="50"
        top="100"
        left="30"
        @click="backOne"
      ></overlay>
    </view>
    <scroll-view scroll-y class="scroll-height">
      <ice-img
        src="/static/house/house-mid.png"
        @click="goTo('/pages/house/account')"
      ></ice-img>
      <ice-img src="/static/house/house-third.png"></ice-img>
      <ice-img src="/static/house/house-down.png"></ice-img>
    </scroll-view>
  </view>
</template>
<script setup>
import glbFunc from "@/utils/globalFunc.js";
import overlay from "/pages/common/overlay.vue";

const { goTo, backOne } = glbFunc();
</script>
<style lang="scss" scoped>
.box-container {
  background: #f0f3f7;
  .relative {
    height: 314rpx;
    position: relative;
  }
}
</style>
