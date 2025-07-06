<template>
  <view class="nav-title">
    <view class="nav-bg"></view>
    <view class="nav-mask" :style="{ opacity: bgOpacity }"></view>
    <view class="nav-content flex-center">
      <view>
        <slot name="left">
          <uv-icon @click="backOne" name="arrow-left" :color="color" size="40rpx"></uv-icon> 
        </slot>
      </view>
      <view class="settings flex-one" :style="{
        'color': color, 'text-align': isCenter ? 'center' : ''
      }">{{ title }}</view>
      <view>
        <slot name="right"></slot>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import glbFunc from '@/utils/globalFunc'
const { backOne } = glbFunc()

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  bgOpacity: {
    type: Number,
    default: 0
  },
  isCenter: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: '#2B2B2B'
  }
})

// 可以保留watch，但也可以不用，因为直接使用props.bgOpacity
// 添加渐变过渡效果（现在由遮罩层的opacity直接控制，已经自带了过渡）
const bgOpacityTransition = ref(0)
watch(() => props.bgOpacity, (newVal) => {
  bgOpacityTransition.value = newVal
}, { immediate: true })
</script>

<style lang="scss" scoped>


.nav-bg, .nav-mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.nav-bg {
  background: url('/static/me/wel-bac.jpg') no-repeat 0 0 / 100% 100%;

.nav-mask {
  background-color: #fff;
  opacity: 0;
  transition: opacity 0.3s ease; /* 过渡效果 */
}

.nav-content {
  position: relative;
  height: 100%;
  padding: 0 20rpx;
  display: flex;
  align-items: center;
}

.settings {
  margin-left: 20rpx;
  font-size: 32rpx;
  transition: color 0.3s ease;
}
</style>