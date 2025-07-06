<template>
  <view class="box-container">
    <scroll-view scroll-y class="scroll-height">
      <view class="header">
        <view class="nav flex-center nav-pad">
          <my-img class="me-right" src="/static/house/left-white.png" width="14rpx" height="32rpx"></my-img>
          <uv-text text="我的账户" color="#fff" size="36rpx"></uv-text>
          <my-img class="me-right" height="56rpx" width="56px" src="/static/house/star.png"></my-img>
          <my-img height="56rpx" width="136rpx" src="/static/house/circle.png"></my-img>
        </view>
        <view class="card" :class="{'global-flex': !id}">
          <view v-if="id" class="normal-card global-flex">正常缴存</view>

          <view v-if="!id" class="account-info">
            <view class="avatar global-flex">
              <my-img src="/static/house/avatar.svg" width="80rpx" height="80rpx"></my-img>
            </view>
            <view class="button-login">
              <uv-button @click="id = 1" text="请登录" color="linear-gradient(to right, #1F57D8, #6390F5)"
                shape="circle"></uv-button>
            </view>
          </view>
          <view class="me-info" v-else>
            <view class="info-top flex-center">
              <my-img src="/static/house/me-avatar.png" width="110rpx" height="110rpx"></my-img>
              <view class="name-con">
                <uv-text margin="0 0 40rpx 0" bold text="李**" size="40rpx"></uv-text>
                <uv-text text="账户: 12345789" size="28rpx"></uv-text>
              </view>
            </view>
            <view class="company ">
              <text class="company-text">
                缴存单位:
              </text>
              中国邮政速递物流股份有限公司
            </view>
            <view class="num flex-center">
              <view class="num-left">
                6666.66元
                <view class="num-down">缴存基数</view>
              </view>
              <view class="num-left">
                16/16%
                <view class="num-down">个人/单位缴存比例</view>
              </view>
            </view>
          </view>
        </view>

        <view class="more" @click="goHome">
          <view class="flex-center field-box">
            <view class="field-img ">
              <my-img class="img-right" src='/static/house/house-more.png' width="52rpx" height="60rpx"></my-img>
            </view>
            <view class="flex-one field-height flex-center">
              <view class="flex-one text-value"> 更多账户 </view>
              <uv-icon bold name="arrow-right" color="#656568" size="36rpx"></uv-icon>
            </view>
          </view>
          <view class="flex-center field-box">
            <view class="field-img ">
              <my-img class="img-right" src='/static/house/house-more.png' width="52rpx" height="60rpx"></my-img>
            </view>
            <view class="flex-one field-height flex-center">
              <view class="flex-one text-value"> 设置 </view>
              <view class="open">开启关爱版</view>
              <uv-icon bold name="arrow-right" color="#656568" size="36rpx"></uv-icon>
            </view>
          </view>
        </view>
      </view>

    </scroll-view>
  </view>
  <house-tab :current="currentTab"></house-tab>
</template>

<script setup>
import {
  onShow, onLoad
} from '@dcloudio/uni-app'
import { ref } from 'vue'
const id = ref(null)
const goHome = () => {
  uni.navigateTo({
    url: '/pages/house/verify'
  })

}
const currentTab = ref(2)
onLoad(() => {
  uni.hideTabBar({
    animation: false,
    fail: () => {
      // 捕获报错
    }
  });
})

onShow(() => {
  currentTab.value = 2
})
</script>

<style lang="scss" scoped>
.box-container {
  height: calc(100% - var(--global-tab-height));
  padding-top: 0;

  .header {
    padding-top: var(--nav-top);
    height: 396rpx;
    background: url('/static/house/bac-me.png') no-repeat 0 0 / 100% 100%;

    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20rpx;
    }

    .me-right {
      margin-right: 12rpx;
    }
  }
}

.more-info {
  margin: 20rpx 0;
}

.normal-card {
  width: 212rpx;
  height: 59rpx;
  background-color: #244ED6;
  border-radius: 50rpx 0 0 50rpx;
  position: absolute;
  font-size: 28rpx;
  color: #fff;
  right: 0;
  top: 30rpx;
}

.card {
  margin-top: 38rpx;
  position: relative;
  height: 405rpx;
  background-color: #fff;
  border-radius: 10rpx;
  box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.1);

  .more {
    margin-top: 28rpx;
  }

  .account-info {

    display: flex;
    flex-direction: column;
    align-items: center;
    .avatar {
      width: 120rpx;
      height: 120rpx;
      border-radius: 50% !important;
      background: #D8D8D8;
    }

    .button-login {
      padding-top: 50rpx;
      width: 500rpx;
    }
  }

}

.img-right {
  margin-right: 24rpx;
}



.field-height {
  height: 96rpx;
}

.text-value {
  font-size: 32rpx;
}

.field-box {
  margin: 0 24rpx;
  border-bottom: 2rpx solid #EAEAE8;
}

.open {
  color: #666666;
  margin-right: 24rpx;
}

$pad: 26rpx;

.me-info {
  padding: $pad 0 $pad $pad;

  .info-top {
    .name-con {
      padding-left: 49rpx;
    }
  }

  .company {
    padding: 25rpx 0 34rpx 9rpx;
    flex-wrap: wrap;

    .company-text {
      color: var(--title-color);
      margin-right: var(--global-pad);
    }
  }

  .num {
    padding-left: 9rpx;
    .num-left {
      width: 50%;
      font-weight: bold;
      font-size: 36rpx;
      .num-down {
        margin-top: 22rpx;
        font-weight: normal;
        font-size: 27rpx;
        color: var(--title-color);
      }
    }
  }
}
</style>