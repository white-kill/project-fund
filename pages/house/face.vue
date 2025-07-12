<template>
  <view class="box-container">
    <view class="pushContent">
      <live-pusher id="pusherId" ref="pusherRef" class="livePusher" aspect="4:3" :whiteness="1" :beauty="1"
        device-position="front" />

      <cover-image class="pusherImg" :src="img1" alt=""></cover-image>

      <cover-image @click="backOne" class="newImg" :src="img2" alt=""></cover-image>


    </view>
  </view>
</template>

<script setup>

import { onMounted, ref, getCurrentInstance, onBeforeUnmount } from 'vue';
import img1 from '/static/house/verify-Logo.png'
import img2 from '/static/house/wrong.png'
import glbFunc from '/utils/globalFunc.js'
import {
  onLoad
} from '@dcloudio/uni-app'
const { backOne, goTo } = glbFunc()
const pusherRef = ref();
// 1. 定义定时器 ID（使用 ref 响应式变量）
const timer = ref(null);
const delay = 3000;


const initCamera = () => {
  const instance = getCurrentInstance();
  const pusherContext = uni.createLivePusherContext('pusherId', instance.ctx);
  pusherContext.switchCamera(); // 延迟切换确保稳定性

  // 启动跳转定时器
  timer.value = setTimeout(() => {
    uni.redirectTo({ url: targetPage });
  }, delay);



};
onMounted(() => {
  // 延迟初始化确保DOM稳定

  initCamera();

});
const targetPage = '/pages/house/success'; // 目标页面路径


// 3. 清理定时器（页面卸载前）
onBeforeUnmount(() => {
  if (timer.value) {
    clearTimeout(timer.value);
    timer.value = null;
  }
})
</script>

<style lang="scss" scoped>
.box-container {
  position: relative;
}

.pushContent {
  margin: 80rpx auto;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .livePusher {
    width: 800rpx;
    height: 800rpx;
    position: relative;
  }

  .pusherImg {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: fill;
    z-index: 100; // 确保图片在最上层

  }

  // 新增图片的样式
  .newImg {
    position: absolute;
    top: 0; // 距离顶部的距离
    left: 20rpx; // 距离左边的距离
    width: 100rpx; // 图片的宽度
    height: 100rpx; // 图片的高度
    z-index: 100; // 确保图片在最上层
  }
}
</style>