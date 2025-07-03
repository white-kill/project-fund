<template>
  <view class="box-container">
    <new-nav title="网银商行" :bg-opacity="opacitys">
      <template #right>
        <my-img src="/static/money/nav.png" width="136rpx" height="56rpx"></my-img>

      </template>
    </new-nav>
    <scroll-view scroll-y class="tab-con" @scroll="onScroll">
      <ice-img src="/static/homeIcon/bus-one.png" />
      <ice-img src="/static/me/bus-two.png" />
      <ice-img src="/static/me/bbus-three.png" />


    </scroll-view>
      <ice-img style="position: fixed;bottom:0" src="/static/me/bank-tab.png" />

  </view>
</template>

<script setup>

import { useNavScroll } from '/utils/scrollUtils';
const { onScroll, opacitys } = useNavScroll()

</script>

<style lang="scss" scoped>
.box-container {
  background: #1678FF
}
</style>