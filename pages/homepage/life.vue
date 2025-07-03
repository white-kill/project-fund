<template>
  <view class="box-container">
    <new-nav ref="navbar" class="navbar" title="南充市" :bg-opacity="opacitys">
      <template #right>
        <my-img src="/static/money/nav.png" width="136rpx" height="56rpx"></my-img>
      </template>
    </new-nav>
    <scroll-view scroll-y class="tab-con" @scroll="onScroll">
      <ice-img src="/static/homeIcon/lifes.png"></ice-img>
      <ice-img src="/static/homeIcon/online.png"></ice-img>
      <ice-img src="/static/homeIcon/online-two.png"></ice-img>
      <ice-img src="/static/homeIcon/online-three.png"></ice-img>

    </scroll-view>


  </view>
</template>
<script setup>

import { useNavScroll } from '/utils/scrollUtils';
const { onScroll, opacitys } = useNavScroll()

</script>
<style lang="scss" scoped>
.box-container {
  background: linear-gradient(to right, #EAF3FF 10%, #D4E4FF 50%);
  padding-bottom: 0;

}
</style>