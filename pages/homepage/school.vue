<template>
  <view class="box-container">
    <new-nav title="校园派" :bg-opacity="opacitys">
      <template #right>
        <my-img src="/static/money/nav.png" width="136rpx" height="56rpx"></my-img>
      </template>
    </new-nav>
    <scroll-view scroll-y class="tab-con" @scroll="onScroll">
      <ice-img src="/static/homeIcon/school-three.png"></ice-img>
      <ice-img src="/static/homeIcon/school-two.png"></ice-img>
      <ice-img src="/static/homeIcon/school-one.png"></ice-img>

    </scroll-view>


  </view>
</template>
<script setup>



import { useNavScroll } from '/utils/scrollUtils';
const { onScroll, opacitys } = useNavScroll()
</script>
<style lang="scss" scoped>
.box-container {  
    background: #8EDEF9
}
</style>