<template>
  <view class="box-container">
    <view class="fixed-img-group">
      <my-img class="fixed-img" width="54rpx" height="54rpx" src="/static/house/house-two.png"></my-img>
      <my-img class="fixed-img" width="136rpx" height="56rpx" src="/static/house/house-three.png"></my-img>
    </view>
    <scroll-view scroll-y class="down-area">
      <view class="vertical-end">
        <my-img class="gloabl-gap" width="112rpx" height="88rpx" src="/static/house/logo.png"></my-img>
        <my-img width="378rpx" height="82rpx" src="/static/house/house-one.png"></my-img>
      </view>
      <view class="account-con">
        <my-img height="352rpx" src="/static/house/house-four.png"></my-img>
      </view>
      <view class="title-area flex-center">
        <view class="border"></view>
        热门服务
      </view>
      <view class="account-area  flex-center">
        <view class="img-width" @click="goTo('/pages/house/verify')">
          <my-img  height="96rpx" src="/static/house/account-one.png"></my-img>
          <view class="text-area">账户信息
          </view>
        </view>
        <view class="img-width">
          <my-img  height="96rpx"  src="/static/house/accoun-two.png"></my-img>
          <view class="text-area">个税抵扣
          </view>
        </view>
        <view class="img-width">
          <my-img height="96rpx" src="/static/house/accoun-three.png">

          </my-img>
          <view class="text-area">
            <view>
              贷款信息
            </view>
            <view>
              填报信息
            </view>
          </view>

        </view>
        <view class="img-width">
          <my-img height="96rpx" src="/static/house/account-four.png"></my-img>
          <view class="text-area">转移接续
          </view>
        </view>
      </view>
      <view class="title-area flex-center">
        <view class="border"></view>
        城市服务

        <view class="flex-one flex-end more">查看更多>></view>

      </view>
      <view class="bac">
        <my-img height="122rpx" src="/static/house/house-bottom.png"></my-img>

      </view>

    </scroll-view>

  </view>
  <house-tab :current="currentTab"></house-tab>

</template>

<script setup>
import { ref } from 'vue'
import {
  onShow, onLoad
} from '@dcloudio/uni-app'
import glbFunc from '/utils/globalFunc'
const { goTo } = glbFunc()
const currentTab = ref(0)
onLoad(() => {
  uni.hideTabBar({
    animation: false,
    fail: () => {
      // 捕获报错
    }
  });
})

onShow(() => {
  currentTab.value = 0
})
</script>

<style lang="scss" scoped>
$pad: 30rpx;

.box-container {
  padding-top: var(--nav-top);
  height: calc(100% - var(--global-tab-height));

  background: #fff;
  position: relative;
  /* 设置容器为相对定位 */

  .down-area {
    padding: 0 $pad;

    .account-con {
      padding: 34rpx 0 62rpx 0;
    }

    .more {
      font-weight: normal;
      color: #295FD9;
    }
  }

  .title-area {

    color: var(--title-text);
    font-weight: bold;
    font-size: 32rpx;

    .border {
      margin-right: 20rpx;
      width: 8rpx;
      height: 28rpx;
      background: linear-gradient(180deg, #285FDD 0%, #6694F6 100%);

    }
  }

  .account-area {
    padding: 36rpx 18rpx;

    .text-area {
      margin-top: 12rpx;
      text-align: center;
      height: 72rpx;
    }

    .img-width {
      width: calc(calc(100% - 150rpx) / 3);
    }
  }

  .bac {
    margin-top: 34rpx;
  }
}

.fixed-img-group {
  position: absolute;
  /* 设置图片组为绝对定位 */
  z-index: 99;
  /* #ifndef H5 */
  top: 88rpx;
  /* 距离顶部20rpx */
  /* #endif */
  /* #ifdef H5 */
  top: 0;
  /* #endif */
  right: var(--global-pad);
  /* 距离右侧24rpx */
  display: flex;
  /* 使用flex布局 */
  flex-direction: row;
  /* 水平排列 */
  align-items: center;
  /* 垂直居中 */
}

.fixed-img {
  margin-left: 14rpx;
  /* 设置图片之间的间距 */
}

.fixed-img:first-child {
  margin-left: 0;
  /* 第一个图片不需要左边距 */
}
</style>