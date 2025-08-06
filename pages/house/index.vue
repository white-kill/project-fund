<template>
  <view class="box-container">
    <view class="relative">
      <my-img :height="navImage == img1 ? '306rpx' : '261rpx'" :src="navImage"> </my-img>
      <overlay width="80" height="50" top="100" left="30" @click="backOne"></overlay>
    </view>
    <scroll-view scroll-y class="scroll-area" @scroll="onScroll">
      <view class="relative">
        <my-img src="/static/house/house-mid.png" height="644rpx"></my-img>
        <overlay width="650" height="400" bottom="80" left="50" @click="goTo('/pages/house/account')">
        </overlay>
      </view>
      <ice-img src="/static/house/house-third.png"></ice-img>
      <ice-img src="/static/house/house-down.png"></ice-img>
    </scroll-view>
  </view>
</template>

<script setup>
import glbFunc from "@/utils/globalFunc.js";
import overlay from "/pages/common/overlay.vue";
import { ref, computed } from 'vue';
import img1 from '/static/house/house-nav.png'
import img2 from '/static/house/house-nav-sec.png'

const { goTo, backOne } = glbFunc();

// 添加滚动位置状态
const scrollTop = ref(0);

// 计算属性，根据滚动位置决定显示哪张图片
const navImage = computed(() => {
  return scrollTop.value > 100 ? img2 : img1
})

// 滚动事件处理函数
const onScroll = (e) => {
  scrollTop.value = e.detail.scrollTop;
};
</script>

<style lang="scss" scoped>
.box-container {
  background: #f0f3f7;

  .scroll-area {
    height: calc(100% - 306rpx);
  }

  .relative {
    position: relative;
  }
}
</style>