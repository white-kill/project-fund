<template>
  <view class="box-container">
    <new-nav color="#fff" title="进阶理财" style="background-color: #1678ff">
      <!-- <template #right>
        <my-img src="/static/tab/dian.png" width="33rpx" height="6rpx"></my-img>
      </template> -->
    </new-nav>
    <scroll-view scroll-y class="tab-con">
      <ice-img src="/static/money/jinjie-bac.png" />
      <my-view height="150"></my-view>
    </scroll-view>
  </view>
  <ice-img class="tab-area" src="/static/moneyPage/jjlc-tab.png"></ice-img>
</template>

<script setup></script>

<style lang="scss" scoped>
.tab-area {
  position: fixed;
  bottom: 0;
}
</style>
