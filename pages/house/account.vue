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
        <view class="bac-img ">
          <view class="vertical-end">
            <view class="account-text">余额（元)</view>
            <my-img v-if="isOpen" width="41rpx" height="25rpx" src="/static/house/eyes-open.png"></my-img>
            <my-img v-else width="41rpx" height="25rpx" src="/static/house/eyes-close.png"></my-img>

          </view>
          <view class=" flex-box">
            <view class="flex-one account-num">
              ******
            </view>
            <view class="flex-one">
              <uv-button  @click="goTo('/pages/house/verify')" style="height: 70rpx;width: 280rpx;font-size: ;" text="点击登录" color="#174DCE"
                shape="circle"></uv-button>
            </view>
          </view>
          <view class="flex-box gap-one">
            <view class="recent">
              最近缴存（元)
            </view>
            <view class="recent">
              最近提取（元)
            </view>
          </view>
          <view class="gap-two flex-box">
            <view class="flex-one flex-box">
              <view class="star-size flex-one">******</view>
              
              <uv-icon @click="goTo('/pages/account/all?tabIndex=1')" class="icon-right" name="arrow-right" color="#fff" size="40rpx"></uv-icon>
            </view>

            <view class="flex-one flex-box">
             <view class="star-size flex-one">******</view>
              <uv-icon @click="goTo('/pages/account/all?tabIndex=2')" class="icon-right"  name="arrow-right" color="#fff" size="40rpx"></uv-icon>
            </view>
          </view>
          <view class="flex-box">
            <view class="flex-one flex-box">
             <view class="star-size ">---</view>
            </view>

            <view class="flex-one flex-box">
              <view class="star-size">---</view>
            </view>
          </view>
        </view>
      </view>
      <view class="title-area flex-center">
        <view class="border"></view>
        热门服务
      </view>
      <view class="account-area  flex-center">
        <view class="img-width" @click="goTo('/pages/house/verify')">
          <my-img height="96rpx" src="/static/house/account-one.png"></my-img>
          <view class="text-area">账户信息
          </view>
        </view>
        <view class="img-width"  @click="goTo('/pages/account/info')">
          <my-img height="96rpx" src="/static/house/accoun-two.png"></my-img>
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

import glbFunc from '/utils/globalFunc'
const { goTo } = glbFunc()
const currentTab = ref(0)
const isOpen = ref(false)
</script>

<style lang="scss" scoped>
$pad: 30rpx;

:deep(.uv-button__text) {
  font-size: 26rpx !important;
}

.box-container {
  padding-top: var(--nav-top);
  height: calc(100% - var(--global-tab-height));
  background: #fff;
  position: relative;

  /* 设置容器为相对定位 */
  .gap-one {
    margin-top: 48rpx;
  }

  .gap-two {
    margin: 27rpx 0;
  }

  .down-area {
    padding: 0 $pad;

    .account-con {
      padding: 34rpx 0 62rpx 0;

      .bac-img {
        view {
          color: #fff;
        }

        padding: 33rpx 50rpx 33rpx 33rpx;
        background: url('/static/house/house-bac.png') no-repeat 0 0 / 100% 100%;
      }

      .star-size {
        font-size: 19rpx;
      }
      .icon-right{
        padding-right: 60rpx;
      }

      .account-text {
        font-size: 26rpx;

        margin-right: 70rpx;
      }

      .account-num {
        font-size: 32rpx;
        font-weight: bold;
        margin-top: 15rpx;
      }

      .recent {
        width: 50%;
        font-size: 23rpx;
      }
    }

    .more {
      font-weight: normal;
      color: #295FD9;
    }
  }

  .title-area {
    color: var(--title-text);
    font-size: 36rpx;
       
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