<template>
  <view class="box-container">
    <new-nav title="银行卡" style="background:'#fff';">
      <template #right>
        <my-img src="/static/money/nav.png" width="136rpx" height="56rpx"></my-img>

      </template>
    </new-nav>
    <scroll-view scroll-y class="tab-con">
      <ice-img src="/static/me/bankCard.png" />
    </scroll-view>

  </view>
</template>

<script setup>


</script>

<style lang="scss" scoped>
.box-container {
background:#EFF2F6
}
</style>