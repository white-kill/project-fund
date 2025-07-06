<template>
  <view class="box-container ">
    <new-nav class="home-nav">
      <template #left>
        <view class="flex-center">
          <text class="text-peo">用户保护中心</text>
          <uv-icon name="arrow-right" color="#707A84" size="28rpx"></uv-icon>

        </view>
      </template>
      <template #right>
        <view class="flex-end">
          <my-img src="/static/me/listen.png" width="44rpx" height="44rpx"></my-img>
          <my-img @click="goTo('/pages/me/settings')" class="settings" src="/static/me/settings.png" width="44rpx"
            height="44rpx"></my-img>
        </view>
      </template>
    </new-nav>

    <scroll-view scroll-y class="tab-con">
      <view class=""></view>
      <view @click="goTo('/pages/me/info')" class="photo-area flex-center">
        <my-img src="/static/me/avatar.png" width="116rpx" height="116rpx"></my-img>
        <view class="name-area ">
          <uv-text class="text-pad" size="36rpx" color="#2D3035" bold text="abcdef"></uv-text>
          <view class="text-down">182*******71</view>
        </view>
        <view class="icon-area flex-one flex-end">
          <my-img src="/static/me/right-dark.png" width="36rpx" height="36rpx"></my-img>
        </view>
      </view>
      <view class="field-area">
        <my-field class="field-large field-bottom" website="/pages/me/member" :url="'/static/me/me-one.png'"
          modelValue='支付宝会员' :isBorder="false"></my-field>
        <view class="field-large ">
          <my-field modelValue='账单' :url="'/static/me/bill.png'"></my-field>
          <my-field modelValue='总资产' url='/static/me/me-two.png' website="/pages/me/price"></my-field>
          <my-field modelValue='余额' url='/static/me/me-three.png' website="/pages/me/remain"></my-field>
          <my-field modelValue='余额宝' :url="'/static/me/me-four.png'" website="/pages/me/balance"></my-field>
          <my-field modelValue='花呗' url='/static/me/me-five.png' website="/pages/me/tokio"></my-field>
          <my-field modelValue='银行卡' url='/static/me/bank.png' website="/pages/me/bankCard"></my-field>
          <my-field modelValue='宝藏信用卡' url='/static/me/card-logo.png' :isBorder="false"
            website="/pages/me/bzxyk"></my-field>

        </view>
        <view class="field-large field-top">
          <my-field modelValue='芝麻信用' url='/static/me/me-six.png' website="/pages/homepage/trust"></my-field>
          <my-field modelValue='蚂蚁保' url='/static/me/me-seven.png' website="/pages/me/ant"></my-field>
          <my-field modelValue='借呗' url='/static/me/j-logo.png' website="/pages/me/jiebei"></my-field>
          <my-field modelValue='网商贷' url='/static/me/w-logo.png' website="/pages/me/wsd"></my-field>
          <my-field modelValue='网银商行' url='/static/me/me-eight.png' :isBorder="false"
            website="/pages/me/bank"></my-field>

        </view>


        <my-field url='/static/me/welfare.png' class="field-large field-top" website="/pages/me/welfare" modelValue='公益'
          :isBorder="false"></my-field>
        <view style="height: 50rpx;"></view>
      </view>
    </scroll-view>
  </view>
  <my-tab :current="currentTab"></my-tab>

</template>
<script setup>
import {
  onShow, onLoad
} from '@dcloudio/uni-app'
import glbFunc from '/utils/globalFunc.js'
const { goTo } = glbFunc()
import { ref } from 'vue'
const currentTab = ref(4)
onLoad(() => {
  uni.hideTabBar({
    animation: false,
    fail: () => {
      // 捕获报错
    }
  });
})
onShow(() => {
  currentTab.value = 4
})
</script>
<style lang="scss" scoped>
$eight: 16rpx;

.box-container {
  height: calc(100% - var(--global-tab-height));
  padding-bottom: var(--box-bot);

  .tab-con {
    height: calc(100% - 72rpx);
  }

  background: url('/static/apply/apply-bac.jpg') no-repeat 0 0 / 100% 100%;

  .text-peo {
    font-size: 29rpx;
    color: #707A84;
    padding-left: 36rpx;
  }

  .photo-area {
    padding: 8rpx 24rpx 46rpx 42rpx;

    .name-area {
      padding: 0 32rpx;

      .text-pad {
        padding-left: 10rpx;
      }

      .text-down {
        padding: 8rpx;
        font-size: 26rpx;
        background: #CADFFA;
        border-radius: 22px;
        color: #203957;
      }
    }



  }

  .field-top {
    margin-top: $eight;
  }

  .field-bottom {
    margin-bottom: $eight;
  }

  .img-right {
    margin-right: 24rpx;
  }

  .settings {
    margin: 0 36rpx 0 44rpx;
  }



  .field-area {
    padding: 0 $eight;

    .fields {
      height: 86rpx;
      font-size: 32rpx;
      background: #fff;
      border-radius: 20rpx;
      padding: 0 24rpx;
      display: flex;
      align-items: center;
      margin-bottom: $eight;
    }

    .field-large {
      background: #fff;
      border-radius: 20rpx;


      .con-right {
        border-bottom: 2rpx solid #F9F9F9;
      }
    }
  }

}
</style>
