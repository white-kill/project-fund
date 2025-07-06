<template>
  <view class="box-container">
    <view class="pushContent">
      <live-pusher
        id="pusherId"
        ref="pusherRef"
        class="livePusher"
        aspect="4:3"
        :whiteness="1"
        :beauty="1"
        device-position="front"
      />
      <!-- 原有的图片 -->
      <cover-image  class="pusherImg" src="/static/house/verify-logo.png" alt=""></cover-image>
      <!-- 新增的图片 -->
      <cover-image @click="backOne" class="newImg" src="/static/house/wrong.png" alt=""></cover-image>
    </view>
  </view>
</template>

<script setup>
import { onMounted, ref, getCurrentInstance,onBeforeUnmount } from 'vue';
import glbFunc from '/utils/globalFunc.js'
const {backOne,goTo} = glbFunc()
const pusherRef = ref();
// 1. 定义定时器 ID（使用 ref 响应式变量）
const timer = ref(null);
const delay = 3000; 
const targetPage = '/pages/house/success'; // 目标页面路径

onMounted(() => {
  const instance = getCurrentInstance();
  const pusherContext = uni.createLivePusherContext('pusherId', instance.ctx);
  pusherContext.switchCamera();
  // pusherContext.startPreview({}) // nvue 页面吊起摄像头
    timer.value = setTimeout(() => {
    uni.redirectTo({ url: targetPage });
  }, delay);
})
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
  }

  // 新增图片的样式
  .newImg {
    position: absolute;
    top: 0; // 距离顶部的距离
    left: 20rpx; // 距离左边的距离
    width: 100rpx; // 图片的宽度
    height: 100rpx; // 图片的高度
    z-index: 10; // 确保图片在最上层
  }
}
</style>