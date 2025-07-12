<template>
  <view class="box-container">
    <view class="nav-title flex-center">
      <my-img @click="backOne" src="/static/me/me-left.png" width="14rpx" height="32rpx"></my-img>
      <view class="settings">设置</view>
    </view>
    <scroll-view scroll-y class="tab-con">
      <my-img height="1058rpx" class="img-top" src="/static/me/setting.png" />
      <view class="btn-area">
        <uv-button class="btn-login" text="登录其他账号"></uv-button>
        <uv-button @click="goTo('/pages/login/index')" text="退出登录"></uv-button>
      </view>
      <view class="list-area">

        <view class="global-flex list-con list-bot">
          《个人信息共享清单》
          《个人信息已收集清单》
        </view>
        <view class="global-flex list-con">
          《隐私权政策》
        </view>
      </view>
    </scroll-view>

  </view>
</template>

<script setup>
import glbFunc from '/utils/globalFunc'
const { backOne,goTo } =glbFunc()
</script>

<style lang="scss" scoped>
.box-container {
  background: #F5F5F5;


    .img-top {
      margin-bottom: -20rpx;
    }
  



    .settings {
      margin-left: 20rpx;
      font-size: 32rpx;
      color: #2B2B2B;

  
  }

  .btn-area {
    padding: 0 18rpx;
 
    :deep(.uv-button--square) {
      border-radius: 22rpx;
      
    }
  }

  .list-area {
    padding-top: 52rpx;

    .list-con {
      color: #2378E3
    }

    .list-bot {
      margin-bottom: 8rpx;
    }
  }

  .down-con {
    height: calc(100% - 72rpx);
    width: 100%;
  }

  .btn-login {
    margin: 16rpx 0;
  }


}
</style>