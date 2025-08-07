<template>
  <view class="box-container">
    <scroll-view scroll-y class="base-layout" @scroll="scrollChange">
      <ice-img src="/static/me/wel-one.png" />
      <ice-img src="/static/me/wel-two.png" />
      <view class="nav-con flex-center" :style="{ backgroundColor: `rgba(255, 255, 255, ${scrollOpacity})` }">
        <view class="icon-con">
          <uni-icons :color="titleColor" @click="backOne" type="left" size="var(--left-icon-size)"></uni-icons>
        </view>
        <my-view size="32" :color="titleColor" class="flex-one global-center">支付宝公益</my-view>
        <my-img style="margin-right: 32rpx;" src="/static/money/nav.png" width="136rpx" height="56rpx"></my-img>

      </view>
      <my-view height="105"></my-view>
      <view class="safe-area-bottom-filler" />
    </scroll-view>
    <ice-img style="position: fixed;bottom:0" src="/static/me/welfare-four.png" />
  </view>
</template>
<script setup>
import * as _ from 'lodash'
import { computed, ref } from 'vue'
import glbFunc from '@/utils/globalFunc'
const { backOne } = glbFunc()
const titleColor = ref('#ffffff')
const scrollOpacity = ref(0)

// 使用示例
const scrollChange = _.throttle((e) => {
  const scrollTop = e.detail.scrollTop
  const maxScroll = uni.upx2px(200) // 200rpx滚动距离内完成透明度变化
  let opacity = scrollTop / maxScroll
  opacity = Math.min(Math.max(opacity, 0), 1) // 限制在0-1之间
  scrollOpacity.value = opacity
  titleColor.value = scrollTop >= maxScroll ? '#232323' : '#ffffff'
}, 100);

</script>
<style lang="scss" scoped>
@import '/styles/scroll.scss'
</style>
