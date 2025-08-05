<template>
  <view
    :style="{
      'pointer-events': 'none',
      background: bac,
      position: isFixed ? 'fixed' : 'absolute',
      'z-index': '9999',
      left: left + 'rpx',
      top: top + 'rpx',
      right: right + 'rpx',
      bottom: bottom + 'rpx',
      height: height + 'rpx',
      width: width + 'rpx',
    }"
  >
    <view class="auto" @click="handleBottomClick">
      <slot>
        <uv-icon
          v-if="isFixed"
          class="icon"
          @click="back"
          :color="color"
          bold
          size="40rpx"
          name="arrow-left"
        ></uv-icon>
      </slot>
    </view>
  </view>
</template>
<script setup>
const back = () => {
  uni.navigateBack();
};
const emits = defineEmits(["click"]);
const props = defineProps({
  isFixed: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: "#fff",
  },
  height: {
    type: String,
  },
  width: {
    type: String,
  },
  top: {
    type: String,
  },
  bottom: {
    type: String,
  },
  left: {
    type: String,
  },
  right: {
    type: String,
  },
  bac: {
    type: String,
  },
});

const handleBottomClick = () => {
  // 触发点击事件
  emits("click");
};
</script>
<style scoped>
.auto {
  pointer-events: auto;
  height: 100%;
}

.icon {
  display: inline-block;
  margin-left: var(--global-pad);
}
</style>
