<template>
  <view class="box-container">
    <new-nav title="转账">
      <template #right>
         <my-img src="/static/money/nav.png" width="136rpx" height="56rpx" ></my-img>
      </template>
    </new-nav>
    <view >
      <ice-img src="/static/homeIcon/transfer.png"></ice-img>
    </view>
  </view>
</template>
<script setup></script>
<style lang="scss" scoped>
.box-container {
  background: linear-gradient(to bottom, #DBEBFA 10%, #F0F2F6 50%);

}
</style>