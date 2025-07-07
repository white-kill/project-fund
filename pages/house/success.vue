<template>
  <view class="box-container">
    <new-nav title="身份验证"></new-nav>
      <progress :percent="progress"  />
      <view class="global-flex">
        <view class="circle global-flex">
        <my-img with="50rpx" height="50rpx" src="/static/house/right.png"></my-img>          
        </view>
      </view>
        <view class="success">认证成功</view>

    </view>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// 1. 定义定时器 ID（使用 ref 响应式变量）
const timer = ref(null);
const delay = 1000; 
const targetPage = '/pages/house/account'; // 目标页面路径
const progress = ref(0);
// 2. 启动定时器（页面挂载后执行）
const startProgress=()=> {
       timer.value = setInterval(() => {
         progress.value += 35;
        if ( progress.value >= 100) {
          clearInterval(timer.value);
          progress.value = 100;
          // 页面跳转逻辑
          uni.redirectTo({
            url: targetPage
          });
        }
      }, 1000);
    }
onMounted(() => {
  startProgress()
});

// 3. 清理定时器（页面卸载前）
onBeforeUnmount(() => {
  if (timer.value) {
    clearInterval(timer.value);
    timer.value = null;
  }
});
</script>

<style lang="scss" scoped>
.box-container {
  .circle{
    margin: 300rpx 0 80rpx 0;
    height: 100rpx;
    border-radius: 50%;
    width: 100rpx;
    background: var(--input-border);
  }
  .success{
    font-weight: bold;
    text-align: center;
    font-size: 36rpx;
  }
  .img-con {
    padding: 94rpx 0 54rpx 28rpx;
  }

  .text-con {
    padding: 0 30rpx;

    .text-one {
      color: #2B2B2B;
    }

    .bold-font {
      margin: 8rpx 0;
      font-size: 32rpx;
      font-weight: bold;
    }

    .blue {
      color: var(--text-blue);
      margin-right: 12rpx;
    }
  }

  .agree-con {
    padding: 0 0 42rpx 30rpx;
    font-size: 26rpx;
    color: #272727;
  }

  .btn-area {
    padding: 0 36rpx;

    .btn-top {
      margin: var(--global-pad) 0 100rpx 0;
    }
  }
}
</style>