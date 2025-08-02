<template>
  <view :style="{
  
    'paddingTop': top + 'rpx',
    'paddingBottom': bottom + 'rpx',
    'paddingLeft': left + 'rpx',
    'paddingRight': right + 'rpx',
    'height': height,
    'border-radius': radius + 'rpx',
    'background': bac,
    'line-height': line,
    'height': height + 'rpx',
    'color': color, 'font-size': size + 'rpx', 'font-weight': bold ? 'bold' : 'normal'
  }">
    <slot></slot>

  </view>
</template>

<script setup>
const props = defineProps({

  radius: {
    type: String
  },
  height: {
    type: String
  },
  line: {
    type: String
  },
  bac: {
    type: String
  },
  height: {
    type: String
  },
  top: {
    type: String,
    default: '0'
  },
  bottom: {
    type: String,
    default: '0'
  },
  left: {
    type: String,
    default: '0'
  },
  right: {
    type: String,
    default: '0'
  },
  color: {
    type: String,
    default: 'var(--view-text-color)'
  },
  size: {
    type: String,
    default: '28'
  },
  bold: {
    type: Boolean,
    default: false
  }
})
</script>