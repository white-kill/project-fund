<template>
  <view class="box-container">
    <new-nav title="支付宝公益" :bg-opacity="opacitys">
      <template #right>
        <my-img src="/static/money/nav.png" width="136rpx" height="56rpx"></my-img>
      </template>
    </new-nav>
    <scroll-view scroll-y class="tab-con" @scroll="onScroll">
      <ice-img src="/static/me/wel-one.png" />
      <ice-img src="/static/me/welfare-two.png" />
      <ice-img src="/static/me/welfare-three.png" />
    </scroll-view>
    <ice-img style="position: fixed;bottom:0" src="/static/me/welfare-four.png" />

  </view>
</template>

<script setup>

import { useNavScroll } from '/utils/scrollUtils';
const { onScroll, opacitys } = useNavScroll()
</script>

<style lang="scss" scoped>
.box-container {
  background: url('/static/me/wel-bac.png') no-repeat;
  background-size: 100% 100%;

}
</style>