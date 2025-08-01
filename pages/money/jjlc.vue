<template>
  <view class="box-container">
    <new-nav color="#fff" title="进阶理财" style="background-color: #1678FF;">
      <!-- <template #right>
        <my-img src="/static/tab/dian.png" width="33rpx" height="6rpx"></my-img>
      </template> -->
    </new-nav>
    <scroll-view scroll-y class="tab-con">
         <ice-img src="/static/money/jinjie-bac.png" />
         <view style="height: 110rpx;"></view>
    </scroll-view>
  </view>
    <view class="tab-area"></view>

</template>

<script setup>

</script>

<style lang="scss" scoped>

.tab-area{
    position: fixed;
    bottom: 0;
    background: #fff;
    height: 110rpx;
    width: 100%;
}
</style>