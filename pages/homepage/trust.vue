<template>
  <view class="box-container">
    <new-nav color="#fff"  title="芝麻信用" >
      <template #right>
        <my-img src="/static/money/nav.png" width="136rpx" height="56rpx"></my-img>
      </template>
    </new-nav>
    <scroll-view scroll-y class="tab-con" @scroll="onScroll">
      <ice-img src="/static/home/zhima.png"></ice-img>
    

    </scroll-view>


  </view>
</template>
<script setup>



</script>
<style lang="scss" scoped>
.box-container {
  padding-bottom: 0;
  background: #00225F;

}
</style>