<template>
  <view class="box-container">
    <new-nav title="南充市" :bg-opacity="opacitys">
      <template #right>
        <my-img src="/static/money/nav.png" width="136rpx" height="56rpx"></my-img>
      </template>
    </new-nav>
    <scroll-view scroll-y class="tab-con" @scroll="onScroll">
      <ice-img src="/static/me/ant-one.png"></ice-img>
      <ice-img src="/static/me/ant-two.png"></ice-img>
      <ice-img src="/static/me/ant-three.png"></ice-img>
      <ice-img src="/static/me/ant-four.png"></ice-img>
      <view style="height: 72rpx;background: #F5F5F5;"></view>
    </scroll-view>

      <ice-img src="/static/me/ant-tan.png" style="position: fixed;bottom:0"></ice-img>

  </view>
</template>
<script setup>

import { useNavScroll } from '/utils/scrollUtils';
const { onScroll, opacitys } = useNavScroll()

</script>
<style lang="scss" scoped>
.box-container {
  background: #EFF8FF
}
</style>