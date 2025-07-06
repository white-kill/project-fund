<template>
  <view class="box-container">
    <view class="account-bac">
      <new-nav color="#fff" title="住房公积金账户明细">
        <template #right>
          <right-nav></right-nav>
        </template>
      </new-nav>
    </view>
    <view class="tab-con">
      <view class="tabs-con global-flex">
        <uv-tabs :current="tabIndex" :list="list" lineWidth="50" lineColor="#3165DB"></uv-tabs>
      </view>
      <view class="date-area flex-center">
        <view class="date flex-center">
          <view @click=" startPicker.open()" class="left-date flex-one">
            {{ dayjs(startTime).format('YYYY-MM-DD') }}

          </view>
          <view class="mid">至</view>
          <view @click=" endPicker.open()" class="left-date flex-one">

            {{ dayjs(endTime).format('YYYY-MM-DD') }}
          </view>
        </view>
        <view class="search">查询</view>
        <my-img v-if="isDesc" src="/static/house/sort-down.png" width="50rpx" height="55rpx"></my-img>
        <my-img v-else src="/static/house/sort-asc.png" width="50rpx" height="55rpx"></my-img>

      </view>
      <scroll-view scroll-y class="list-area">     
          <view class="card-item" v-for="item in lists.myList" :key="item.id">
            <view class=" flex-one">
              <view class="text-top">{{ item.desc }}</view>
              <view class="text-down">{{ dayjs(item.date).format('YYYY-MM-DD') }}</view>
            </view>
            <view class="flex-end">
              <view class=" flex-one">
                <view  class="text-top" style="text-align: end;">{{ item.num }}</view>
                <view class="text-down">余额: {{ item.balance }}</view>
              </view>
            </view>

          </view>
          <view class="no-data">暂无更多数据</view>
      </scroll-view>
    </view>
    <uv-datetime-picker :formatter="formatter" visibleItemCount="2" itemHeight="120" @confirm="confirmStartDate"
      v-model="startTime" :min-date="startDate" confirmColor="#000" :max-date="endDate" cancelColor="#3866D1"
      confirmText="确认" cancelText="取消" ref="startPicker" mode="date">
    </uv-datetime-picker>
    <uv-datetime-picker :formatter="formatter" visibleItemCount="2" itemHeight="120" @confirm="confirmEndDate"
      v-model="endTime" :min-date="startDate" confirmColor="#000" cancelColor="#3866D1" :max-date="endDate"
      confirmText="确认" cancelText="取消" ref="endPicker" mode="date">
    </uv-datetime-picker>
  </view>

</template>

<script setup>
import { reactive, ref } from 'vue'
import dayjs from 'dayjs'
import { onLoad } from '@dcloudio/uni-app'
import RightNav from '/pages/common/rightNav.vue'
const tabIndex = ref('0')
onLoad((option) => {
  tabIndex.value = option?.tabIndex
})

const lists = reactive({
  myList: [
    {
      id: 0,
      desc: '年终结息',
      num: 84.67,
      date: '2025-09-01',
      balance: 9999.99
    },
    {
      id: 2,
      desc: '汇缴',
      num: 1070,
      date: '2025-06-01',
      balance: 1999.99
    },
  ]
})

const list = [{
  name: '全部',
  id: 1
}, {
  name: '缴存',
  id: 2
}, {
  name: '提取',
  id: 3
}]
const startTime = ref(dayjs(new Date()).format('YYYY-MM-DD'))
const endTime = ref(dayjs(new Date()).format('YYYY-MM-DD'))
const startPicker = ref()
const endPicker = ref()

const formatter = (type, value) => {

  if (type === 'year') {
    return `${value}年`
  }
  if (type === 'month') {
    return `${value}月`
  }
  if (type === 'day') {
    return `${value}日`
  }
  return value

}
const isDesc = ref(true)
const confirmStartDate = (e) => {
}

const confirmEndDate = (e) => {
}
const startDate = Number(new Date('1900-01-01').getTime())
const endDate = Number(new Date())
</script>

<style lang="scss" scoped>
$text-size:32rpx;
$text-size-little:26rpx;

.account-bac {
  background: var(--account-color);
}

.tabs-con {
  height: 100rpx;
}

.date-area {
  height: 120rpx;
  padding: 28rpx 22rpx;
  background: #F4F5F7;

  .date {
    width: 500rpx;
    height: 68rpx;
    border: 2rpx solid #DCDEDD;

    .left-date {
      font-weight: bold;
      text-align: center;
      color: #4973C9;
      font-size: 27rpx;
    }
  }

  .mid {
    font-weight: 500;
    font-size: 32rpx;
    color: #333534;
  }

  .search {
    width: 100rpx;
    height: 60rpx;
    background: #2E64DE;
    border-radius: 8rpx;
    font-weight: 500;
    font-size: 32rpx;
    color: #fff;
    line-height: 60rpx;
    text-align: center;
    margin: 0 28rpx;
  }
}

.list-area {
  padding: 0 24rpx;
  height: calc(100% - 220rpx);

  .card-item {
    display: flex;
    padding: 28rpx 0 35rpx 0;
    border-bottom: 2rpx solid #DFDFDF
  }
  .text-top{
    font-size: $text-size;
    margin-bottom: 20rpx;
  }
  .text-down{
    font-size: $text-size-little;
    color: #818181;
  }
}
.no-data{
  color: var(--grey-text);
  font-size: 24rpx;
  text-align: center;
  margin-top: 28rpx;
}
:deep(.uv-picker__view__column__item) {
  font-weight: normal !important;
}

:deep(.uv-tabs__wrapper__nav__item__text) {
  font-size: 36rpx;
}

:deep(.uv-toolbar) {
  border-bottom: 2rpx solid #DDDDDD;
}

:deep(.uv-toolbar__wrapper__cancel) {
  font-size: 36rpx;
}

:deep(.uv-toolbar__wrapper__confirm) {
  font-size: 36rpx;
}

:deep(.uv-tabs__wrapper__nav__item) {
  padding: 0 80rpx;
}
</style>