<template>
  <view class="box-container">
    <new-nav color="#fff" title="定期" style="background-color: #1678ff">
      <!-- <template #right>
        <my-img src="/static/tab/dian.png" width="33rpx" height="6rpx"></my-img>
      </template> -->
    </new-nav>
    <scroll-view scroll-y class="tab-con">
      <view style="background: #f5f4f9">
        <ice-img src="/static/moneyPage/dq-top.png" />
      </view>

      <ice-img src="/static/moneyPage/dq-down.png" />
      <view style="height: 110rpx"></view>
    </scroll-view>
  </view>
  <ice-img class="tab-area" src="/static/moneyPage/dq-tab.png"></ice-img>
</template>

<script setup></script>

<style lang="scss" scoped>
.box-container {
  background-color: #f5f4f9;
}
.tab-area {
  position: fixed;
  bottom: 0;
}
</style>
