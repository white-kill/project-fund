<template>
  <uv-image :src="src" :width="width" :height="height" :mode="mode"></uv-image>
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    default: '' // 默认图片路径，可根据需要设置
  },
  width: {
    type: String,
    default: '100%' // 默认宽度，可根据需要设置
  },
  height: {
    type: String,
    default: '0rpx' // 默认高度，可根据需要设置
  },
  mode: {
    type: String,
    default: 'aspectFit' // 默认高度，可根据需要设置
  }
})
</script>