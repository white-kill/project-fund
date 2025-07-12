<template>
  <view class="box-container">
    <new-nav title="手机营业厅"  :bg-opacity="opacitys">
      <template #right>
         <my-img src="/static/money/nav.png" width="136rpx" height="56rpx" ></my-img>
      </template>
    </new-nav>
    <scroll-view scroll-y class="tab-con" @scroll="onScroll" >
      <ice-img src="/static/homeIcon/mobile-top.png"></ice-img>
      <ice-img src="/static/homeIcon/mobile-down.png"></ice-img>
      <ice-img src="/static/homeIcon/mobile-bottom.png"></ice-img>

    </scroll-view>
  </view>
</template>
<script setup>

import { useNavScroll } from '/utils/scrollUtils';
const { onScroll, opacitys } = useNavScroll()
</script>
<style lang="scss" scoped>
.box-container{ 
  background: #FFEFEA;
}
</style>