
<template>
  <view class="nav-title flex-center" :style="{
    backgroundColor: `rgba(255, 255, 255, ${bgOpacity})`,
  }">
    <view>
      <slot name="left">
        <uv-icon  @click="backOne" name="arrow-left" :color="color" size="40rpx"></uv-icon> 
      </slot>
    </view>
    <view class="settings flex-one" :style="{
      'color': color, 'text-align': isCenter ? 'center' : ''
    }">{{ title }}</view>
    <view>
      <slot name="right"></slot>
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



// 添加渐变过渡效果
const bgOpacityTransition = ref(0)
watch(() => props.bgOpacity, (newVal) => {
  bgOpacityTransition.value = newVal
}, { immediate: true })
</script>
<style lang="scss" scoped>
.nav-title {
  transition: background-color 0.3s ease, color 0.3s ease;
}

.settings {
  margin-left: 20rpx;
  font-size: 32rpx;
  transition: color 0.3s ease;
}
</style>
