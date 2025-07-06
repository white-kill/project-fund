<template>
  <view class="box-container">
    <view class="nav-title" style="background-color: #1677FF;;">
      <view  class="global-flex">
        <view style="color: #fff;width: 80rpx">合肥</view>
        <my-search :is-blue="false" v-model="searchValue" @click="goNext" isReadonly></my-search>
        <my-img src="/static/home/plus.png" height="48rpx" width="48rpx"></my-img>
      </view>
    </view>
    <scroll-view scroll-y class="tab-con">
      <view>
        <view class="money-one " style="background-color: #1677FF;">
          <view class="price-area flex-center">
            <view class="item-area column-center" @click="scanCode">
              <my-img class="img-bot" width="60rpx" height="60rpx" src="/static/home/scan.png"></my-img>
              扫一扫
            </view>
            <view class="item-area column-center" @click="getMoney">
              <my-img class="img-bot" width="60rpx" height="60rpx" src="/static/home/money.png"></my-img>
              收付款
            </view>

            <view class="item-area column-center" @click="goTo('/pages/homepage/location')">
              <my-img class="img-bot" width="60rpx" height="60rpx" src="/static/home/location.png"></my-img>
              出行
            </view>
            <view class="item-area column-center" @click="goTo('/pages/homepage/card')">
              <my-img class="img-bot" width="60rpx" height="60rpx" src="/static/home/card.png"></my-img>
              卡包
            </view>

          </view>
        </view>
        <view class="icon-area ">
          <view class="flex-box icon-bot">
            <view class="icon-con " @click="goTo('/pages/homepage/transfer')">
              <my-img src="/static/homeIcon/acconut.png" height="60rpx" width="60rpx"></my-img>
              转账
            </view>
            <view class="icon-con " @click="goTo('/pages/me/balance')">
              <my-img src="/static/homeIcon/yuebao.png" height="60rpx" width="60rpx"></my-img>
              余额宝
            </view>
            <view class="icon-con " @click="goTo('/pages/me/welfare')">
              <my-img src="/static/me/welfare.png" height="60rpx" width="60rpx"></my-img>
              支付宝公益
            </view>
            <view class="icon-con " @click="goTo('/pages/me/bank')">
              <my-img src="/static/homeIcon/bank.png" height="60rpx" width="60rpx"></my-img>
              网商银行
            </view>
            <view class="icon-con" @click="goTo('/pages/homepage/trust')">
              <my-img src="/static/homeIcon/believe.png" height="60rpx" width="60rpx"></my-img>
              芝麻信用
            </view>
          </view>
          <view class="flex-box">
            <view class="icon-con " @click="goTo('/pages/homepage/credict')">
              <my-img src="/static/homeIcon/credict.png" height="60rpx" width="60rpx"></my-img>
              信用卡还款
            </view>
            <view class="icon-con " @click="goTo('/pages/homepage/life')">
              <my-img src="/static/homeIcon/life.png" height="60rpx" width="60rpx"></my-img>
              生活缴费
            </view>
            <view class="icon-con " @click="goTo('/pages/homepage/mobile')">
              <my-img src="/static/homeIcon/mobile.png" height="60rpx" width="60rpx"></my-img>
              手机营业厅
            </view>
            <view class="icon-con " @click="goTo('/pages/homepage/little')">
              <my-img src="/static/homeIcon/little.png" height="60rpx" width="60rpx"></my-img>
              我的小程序
            </view>
            <view class="icon-con" @click="goTo('/pages/homepage/application')">
              <my-img src="/static/homeIcon/more.png" height="60rpx" width="60rpx"></my-img>
              更多
            </view>
          </view>
        </view>
        <view class="my-apply">
          <my-img src="/static/homeIcon/house.png" height="176rpx"></my-img>
          <ice-img src="/static/home/shouye.svg"></ice-img>
          <view style="height: 50rpx;"></view>
        </view>
      </view>
    </scroll-view>
  </view>
  <my-tab :current="currentTab"></my-tab>

</template>
<script setup>
import {
  onShow, onLoad
} from '@dcloudio/uni-app'
import { ref } from 'vue'
import glbFunc from '@/utils/globalFunc.js'
const { goTo } = glbFunc()
onLoad(() => {
  uni.hideTabBar({
    animation: false,
    fail: () => {
      // 捕获报错
    }
  });
})
const goNext = () => {
  uni.navigateTo({
    url: '/pages/homepage/search'
  })
}
const getMoney = () => {
  goTo('/pages/homepage/money')
}
const scanCode = () => {
  uni.scanCode({

    success: function (res) {


    }
  })


}
const searchValue = ref(null)
const currentTab = ref(0)
onShow(() => {
  currentTab.value = 0
})
</script>
<style lang="scss" scoped>
.box-container {
  height: calc(100% - var(--global-tab-height));
  padding-bottom: 0;

 

  .icon-bot {
    margin-bottom: 50rpx;
  }

  .my-apply {
    flex: 1;
    background: #EFF4F8;

  }

  .icon-area {
    padding: 50rpx 12rpx;
    background: #EFF4F8;
    border-radius: 20rpx 20rpx 0 0;

    .icon-con {
      flex: 1;
      display: flex;
      flex-direction: column;
      font-size: 24rpx;
      align-items: center;

      uni-view {
        margin-bottom: 12rpx;
      }
    }
  }



  .tab-con {
    height: calc(100% - 72rpx);

    .tab-con-item {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  }

  .price-area {
    padding: 40rpx 0 rpx 0;

    .img-bot {
      margin-bottom: 12rpx;
    }

    .item-area {
      color: #fff;
      flex: 1
    }





  }

  .money-one {
    padding-left: 24rpx;
    padding-right: 24rpx;
    padding-bottom: 24rpx;

    .price-area {
      padding-top: 40rpx;
    }


  }
}
</style>
