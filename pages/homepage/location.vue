<template>
  <view class="box-container">
    <view class="nav-title flex-center">
      <my-img src="/static/me/me-left.png" @click="backOne" width="14rpx" height="32rpx"></my-img>
      <view class="justify-center">
        <my-img  src="/static/home/118.svg" width="342rpx" height="64rpx" mode="aspectFix"></my-img>
      </view>
      <view class="flex-center">
        南充
        <my-img class="img-left" src="/static/home/down.svg" width="14rpx" height="32rpx"></my-img>
      </view>
    </view>
    <uv-tabs :list="list" 
    lineColor="#0E74FD" 
    :activeStyle="{
      color: '#0E74FD',
      transform: 'scale(1.05)'
    }" :inactiveStyle="{
        color: '#2A2F32',
        transform: 'scale(1)'
      }"></uv-tabs>
      <view class="card-con flex-one">
        <my-img class="img-one" src="/static/home/myCard.svg"   height="680rpx"></my-img>
        <my-img  src="/static/home/myRecord.svg" height="120rpx"></my-img>
      </view>
        <my-img  src="/static/home/myTab.svg" height="150rpx"></my-img>

  </view>

</template>
<script setup>
import glbFunc from '@/utils/globalFunc'
const { backOne } = glbFunc()
const list = [
  {
    name: '公交',
  },
  {
    name: '地铁'
  },
  {
    name: '打车',
  },
  {
    name: '12306',
  },
  {
    name: '机票',
  },
  {
    name: '酒店',
  },
  {
    name: '骑行',
  },
]
</script>
<style lang="scss" scoped>
.box-container {
  background: #CAEDFF;
padding-bottom: 0;
  .img-left {
    margin-left: 24rpx;
  }
  .img-one{
    margin: 32rpx 0 16rpx 0;
  }

}
</style>