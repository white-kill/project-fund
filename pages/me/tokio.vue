<template>
  <view class="box-container">
    <new-nav :color="navTextColor" title="花呗 | 信用购" :bg-opacity="opacitys">
      <template #right>
      </template>
    </new-nav>
    <scroll-view scroll-y class="tab-con" @scroll="onScroll">
      <view class="text-con">
        <view class="center">{{ getMounth }}月应还(元)</view>
        <view class="center-white">已还清</view>
        <view style="height: 75rpx;margin: 24rpx 0 47rpx 0;"></view>
        <view class="flex-box down-area">
          <view>
            <view class="down">总计账单</view>
            <view class="center">还款日每月8日</view>

          </view>
          <view>
            <view class="down">总计额度</view>
            <view class="center">20,000.00可用</view>

          </view>
        </view>
        <!-- <my-img src="/static/me/test.png" height="75rpx" width="480rpx"></my-img> -->

      </view>
      <ice-img src="/static/me/tokio-one.png" />
      <ice-img src="/static/me/tokio-two.png" />
      <ice-img src="/static/me/tokio-three.png" />


    </scroll-view>
  </view>
</template>

<script setup>
import { computed } from 'vue'
import dayjs from 'dayjs'
import { useNavScroll } from '/utils/scrollUtils';
const { onScroll, opacitys } = useNavScroll()
// 计算导航文字颜色：当背景透明度小于0.5时，文字为白色，否则为黑色
const navTextColor = computed(() => {
  return opacitys.value < 0.5 ? '#fff' : '#2B2B2B'
})
const getMounth = computed(() => {
  return dayjs(new Date()).format('M')
})

</script>

<style lang="scss" scoped>
.box-container {
  background: var(--input-border);

  .center {
    opacity: 0.5;
    text-align: center;
  }

  .center-white {
    font-size: 43rpx;
    text-align: center;
  }

  .down {
    font-size: 30rpx;
   text-align: center;
  }

  .down-area {
    justify-content: space-around;
  }

  .text-con {
    view {
      color: #fff;
    }


  }

}
</style>