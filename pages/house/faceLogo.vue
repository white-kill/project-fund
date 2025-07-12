<template>
  <view class="box-container">
    <new-nav title="身份验证">

    </new-nav>
    <scroll-view scroll-y class="tab-con">
      <view class="column-center">
    <view class="desc">拍摄您本人人脸，请确保正对手机，光线充足</view>
      <view class="name"> **丰、4*************8</view>
      <my-img src="/static/house/face-logo.png" height="392rpx" width="392rpx"></my-img>
      </view>
  
    </scroll-view>



  </view>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// 1. 定义定时器 ID（使用 ref 响应式变量）
const timer = ref(null);
const delay = 2000; // 停留 2 秒后跳转
const targetPage = '/pages/house/face'; // 目标页面路径

// 2. 启动定时器（页面挂载后执行）
onMounted(() => {
  timer.value = setTimeout(() => {
    // 使用 redirectTo 替换当前页面（避免返回）
    uni.redirectTo({ url: targetPage });
  }, delay);
});

// 3. 清理定时器（页面卸载前）
onBeforeUnmount(() => {
  if (timer.value) {
    clearTimeout(timer.value);
    timer.value = null;
  }
});
</script>
<style lang="scss" scoped>
.box-container {
  background: #E7E5E6;

  .desc {
    font-size: 26rpx;
    margin: 50rpx 0 24rpx 0;
  }

  .name {
    margin-bottom: 60rpx;
    font-weight: bold;
    color: var(--title-color);
  }
}
</style>