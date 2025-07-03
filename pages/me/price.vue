<template>
  <view class="box-container">
    <new-nav title="总资产">
      <template #right>
        去理财
      </template>
    </new-nav>
    <scroll-view scroll-y class="tab-con">
      <view class="image-container">
        <ice-img src="/static/me/price.png"></ice-img>
        <view class="text-overlay" :style="{ top: textPosition.top, left: textPosition.left }">
        {{textValue}}
        </view>
      </view>

      <ice-img src="/static/me/price-down.png"></ice-img>
      <view class="price-box global-flex ">资产账户信息
        <uv-icon name="arrow-right" size="24rpx" color="#999"></uv-icon>

      </view>
    </scroll-view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
const textPosition = {
  top: '250rpx', 
  left: '40rpx' 
}
const textValue = ref('0.00')
</script>

<style lang="scss" scoped>


.box-container {

  background: linear-gradient(to right, #E8EEF8, #E3ECF9);

  .image-container {
    position: relative;
    /* 使内部的绝对定位基于此容器 */
.text-overlay {
  position: absolute;
  color: white; /* 文字颜色 */
  font-size: 42rpx; /* 文字大小 */
  font-weight: bold; /* 文字粗细 */
  
}
  }


  .price-box {
    color: $uni-text-color-grey;
    font-size: 24rpx;
    padding: 100rpx 0;
    background: #F2F2F2;
  }
}
</style>