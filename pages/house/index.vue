<template>
  <view class="box-container">
    
    <scroll-view scroll-y style="height: 100%;">
      <view>
      <ice-img style="position: relative;"  src="/static/house/index-one.png">

      </ice-img>
      <view @click="backOne" class="icon-area"></view>
      </view>

      <ice-img src="/static/house/index-two.png" @click="goTo('/pages/house/account')"></ice-img>
      <ice-img src="/static/house/index-three.png"></ice-img>

    </scroll-view>


  </view>
</template>
<script setup>
import glbFunc from '@/utils/globalFunc.js'
const { goTo,backOne } = glbFunc()


</script>
<style lang="scss" scoped>
.box-container {
background: #F0F3F8;

.icon-area{
  position: absolute;
 top:100rpx;
 width: 80rpx;
 height: 60rpx;

}
}
</style>