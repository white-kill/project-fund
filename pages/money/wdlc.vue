<template>
  <view class="box-container">
    <new-nav color="#fff" title="稳健理财" style="background-color: #1678ff">
      <!-- <template #right>
        <my-img src="/static/tab/dian.png" width="33rpx" height="6rpx"></my-img>
      </template> -->
    </new-nav>
    <scroll-view scroll-y class="tab-con">
      <ice-img src="/static/moneyPage/lc-top.png" />
      <ice-img src="/static/moneyPage/lc-down.png" />
      <view style="height: 110rpx"></view>
    </scroll-view>
  </view>

  <ice-img class="tab-area" src="/static/moneyPage/wdlc-tab.png"></ice-img>
</template>

<script setup></script>

<style lang="scss" scoped>
.box-container {
  background-color: #f5f5f5;
}
.tab-area {
  position: fixed;
  bottom: 0;
}
</style>
