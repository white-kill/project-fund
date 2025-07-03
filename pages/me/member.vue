<template>
  <view class="box-container">
    <new-nav :color="navTextColor" title="支付宝会员" :bg-opacity="opacitys">
      <template #right>
      </template>
    </new-nav>
    <scroll-view scroll-y class="tab-con" @scroll="onScroll">
      <view class="avatar-con">
        <view class="flex-center">
          <image src="/static/me/avatar.png" style="width: 84rpx;height: 84rpx;"></image>
          <view class="flex-one name-con">
            <view class="name-top">张三丰</view>
            <view class="flex-center name-down">大
               <view class="name-down" style="opacity: 0.7;">
                   众会员·
              </view>
          
              <view class="name-down" style="opacity: 0.5;">
                全部特权
              </view>

              <uv-icon name="arrow-right" color="#fff" size="28rpx" style="opacity: 0.5;"></uv-icon>

            </view>

          </view>
          <image src="/static/me/zfb.png" style="width: 80rpx;height: 100rpx;"></image>


        </view>
      </view>
      <ice-img src="/static/me/member-one.png" />
      <ice-img src="/static/me/member-two.png" />
      <ice-img src="/static/me/member-three.png" />


    </scroll-view>
  </view>
</template>

<script setup>
import { computed } from 'vue'
import { useNavScroll } from '/utils/scrollUtils';
const { onScroll, opacitys } = useNavScroll()
// 计算导航文字颜色：当背景透明度小于0.5时，文字为白色，否则为黑色
const navTextColor = computed(() => {
  return opacitys.value < 0.5 ? '#fff' : '#2B2B2B'
})

</script>

<style lang="scss" scoped>
.box-container {
  background: #2874FD;

  .avatar-con {
    padding: 50rpx 80rpx 20rpx 36rpx;
  }

  .name-con {
    padding: 0 36rpx 0 12rpx;

    .name-top {
      color: #fff;
      font-size: 36rpx;
    }

    .name-down {
      color:#fff;
    }
  }
}
</style>