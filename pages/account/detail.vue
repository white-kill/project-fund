<template>
  <view class="box-container">
    <view class="account-bac">
      <new-nav color="#fff" title="住房公积金账户信息">
        <template #right>
          <view class="flex-center img-area">
            <my-img class="star-right" height="56rpx" width="56rpx" src="/static/house/nav-star.png"></my-img>
            <my-img height="56rpx" width="136rpx" src="/static/house/circle.png"></my-img>
          </view>
        </template>
      </new-nav>
    </view>
    <scroll-view scroll-y class="tab-con">
      <view class="card">
        <view class="title-area flex-center">
          <view class="border"></view>
          个人信息
        </view>
         <my-line left-value="姓名" :right-value="infoData.name"></my-line>
        <my-line left-value="手机号码" :right-value="infoData.mobile"></my-line>
        <my-line left-value="个人账号" :right-value="infoData.acccount"></my-line>
        <my-line left-value="个人账户状态" :right-value="infoData.status"></my-line>
        <my-line left-value="个人账户余额" :right-value="infoData.balance"></my-line>
      </view>
      
      <view class="gap-account"></view>
        <view class="card">
        <view class="title-area flex-center">
          <view class="border"></view>
          中心信息
        </view>
        <my-line left-value="中心编号" :right-value="centerData.num"></my-line>
        <my-line left-value="中心名称" :right-value="centerData.name"></my-line>
        <my-line left-value="单位名称" :right-value="centerData.cName"></my-line>
        <my-line left-value="单位账号" :right-value="centerData.cNum"></my-line>
      </view>
       <view class="gap-account"></view>
        <view class="card">
        <view class="title-area flex-center">
          <view class="border"></view>
          账户信息
        </view>
        <my-line left-value="个人缴存比例" :right-value="accountData.peoPercent"></my-line>
        <my-line left-value="单位缴存比例" :right-value="accountData.cPercent"></my-line>
        <my-line left-value="个人缴存基数" :right-value="accountData.peojishu"></my-line>
        <my-line left-value="个人月缴存额" :right-value="accountData.peocune"></my-line>
        <my-line left-value="单位月缴存额" :right-value="accountData.cjishu"></my-line>
      </view>
    </scroll-view>
  </view>

</template>

<script setup>
import { reactive } from 'vue'
const goDetail = () => {
  uni.navigateTo({
    url: '/pages/account/detail'
  })
}
const infoData = reactive({
  status: '正常缴存',
  balance: '9,999.99',
  acccount: '123456789',
  mobile: '15656556556',
  name: '张三丰'
})
const centerData = reactive({
  cName: '正常缴存',
  cNum: '123456789',
  num: '5000000000000',
  name: '中国邮政速递物流股份有限公司'
})
const accountData = reactive({
  peoPercent: '12%',
  cPercent: '12%',
  peojishu: '8,000.00',
  peocune: '500.00',
  cjishu: '500.00'
})
</script>

<style lang="scss" scoped>
$twelve: 12rpx;

.account-bac {
  background: var(--account-color);
}

.detail {
  margin-top: $twelve ;
  color: var(--title-color-sub)
}

.card {
  padding: 15rpx 32rpx 24rpx 36rpx;
}

.star-right {
  margin-right: $twelve;
}

.img-area {
  padding-bottom: $twelve;
}

.gap-account {
  height: var(--global-pad);
  background: #F9F9F9;
}

.title-area {
  padding-bottom: var(--global-pad);
  margin: $twelve 0 ;
  color: var(--title-color-sub);
  font-size: 36rpx;
  border-bottom : 2rpx solid #EAEAEA;
  .border {
    margin-right: 20rpx;
    width: 8rpx;
    height: 36rpx;
    background: linear-gradient(180deg, #285FDD 0%, #6694F6 100%);
  }
}
</style>