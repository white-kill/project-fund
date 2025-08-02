<template>
  <view class="box-container">
    <view class="nav-title bac flex-center">
      <view class="global-flex">
        <my-img src="/static/money/nav-left.svg" height="54rpx" width="54rpx"></my-img>
        <my-search placeholder="我的基金" :is-blue="false" v-model="searchValue" @click="goNext('/pages/homepage/search')" isReadonly></my-search>
        <my-img src="/static/money/nav-right.png" height="46rpx" width="40rpx"></my-img>
      </view>
    </view>
    <scroll-view scroll-y class="tab-con">
    
      <view class="price-area bac flex-box">
        <view class="left-con">
          <view class="desc">总资产(元）</view>
          <view class="num">1.00</view>
        </view>
        <view class="eyes">
          <my-img src="/static/money/eyes.png" width="40rpx" height="33rpx"></my-img>
        </view>
        <view class="flex-one">
          <my-img src="/static/money/free.png" width="166rpx" height="38rpx"></my-img>
        </view>
        <view class="left-con">
          <view class="desc">昨日收益</view>
          <view class="num">0.00</view>
        </view>
        <view class="border-gap"></view>
        <view class="left-con">
          <view class="desc">家庭保障</view>
          <view class="num">
            <text>1</text>
            <text style="font-size: 26rpx;">份</text>
          </view>
        </view>
      </view>
      <view class="bac">
      <my-img src="/static/money/fuli.png" height="75rpx"></my-img>
      </view>
        <view class="bac"> 
           <view class="icon-area">
        <swiper 
          class="icon-swiper" 
          :indicator-dots="false" 
          :autoplay="false" 
          :circular="false"
          @change="onSwiperChange"
        >
          <!-- 第一页 -->
          <swiper-item>
            <view class="swiper-content">
              <view class="flex-center bottom">
                <view class="item-icon" @click="goNext('/pages/me/balance')">
                  <my-img src="/static/money/yeb.png" width="53rpx" height="56rpx"></my-img>
                  <text>余额宝</text>
                </view>
                <view class="item-icon" @click="goNext('/pages/money/wdlc')">
                  <my-img src="/static/money/wdlc.png" width="54rpx" height="58rpx"></my-img>
                  <text>稳健理财</text>
                </view>
                <view class="item-icon" @click="goNext('/pages/money/jjlc')">
                  <my-img src="/static/money/jjlc.png" width="53rpx" height="57rpx"></my-img>
                  <text>进阶理财</text>
                </view>
                <view class="item-icon" @click="goNext('/pages/money/jijin')">
                  <my-img src="/static/money/jijin.png" width="57rpx" height="51rpx"></my-img>
                  <text>基金</text>
                </view>
                <view class="item-icon" @click="goNext('/pages/money/huangjin')">
                  <my-img src="/static/money/huangjin.png" width="58rpx" height="53rpx"></my-img>
                  <text>黄金</text>
                </view>
              </view>
              <view class="flex-center">
                <view class="item-icon" @click="goNext('/pages/money/gupiao')">
                  <my-img src="/static/money/gupiao.png" width="54rpx" height="53rpx"></my-img>
                  <text>股票</text>
                </view>
                <view class="item-icon" @click="goNext('/pages/money/dingqi')">
                  <my-img src="/static/money/dingwi.png" width="49rpx" height="56rpx"></my-img>
                  <text>定期</text>
                </view>
                <view class="item-icon" @click="goNext('/pages/me/ant')">
                  <my-img src="/static/money/baoxian.png" width="58rpx" height="53rpx"></my-img>
                  <text>保险</text>
                </view>
                <view class="item-icon">
                  <my-img  @click="goNext('/pages/money/ylj')" src="/static/money/ylj.png" width="56rpx" height="53rpx"></my-img>
                  <text>养老金</text>
                </view>
                <view class="item-icon" @click="goNext('/pages/money/bangnitou')">
                  <my-img src="/static/money/bangnitou.png" width="49rpx" height="57rpx"></my-img>
                  <text>帮你投</text>
                </view>
              </view>
            </view>
          </swiper-item>
          
          <!-- 第二页 -->
          <swiper-item>
            <view class="swiper-content">
              <view class="flex-center bottom">
                <view class="item-icon">
                  <my-img src="/static/money/quanqiu.png" width="53rpx" height="56rpx"></my-img>
                  <text>全球投资</text>
                </view>
                <view class="item-icon">
                  <my-img src="/static/money/chuxu.png" width="54rpx" height="58rpx"></my-img>
                  <text>储蓄险</text>
                </view>
                <view class="item-icon">
                  <my-img src="/static/money/panyou.png" width="53rpx" height="57rpx"></my-img>
                  <text>盘友圈</text>
                </view>
                <view class="item-icon">
                  <my-img src="/static/money/licai.png" width="57rpx" height="51rpx"></my-img>
                  <text>理财金选</text>
                </view>
                <view class="item-icon">
                  <my-img src="/static/money/huabei.png" width="49rpx" height="57rpx"></my-img>
                  <text>花呗</text>
                </view>
              </view>
              <view class="flex-center">
                <view class="item-icon">
                  <my-img src="/static/money/jiebei.png" width="57rpx" height="56rpx"></my-img>
                  <text>借呗</text>
                </view>
                <view class="item-icon">
                  <my-img src="/static/money/zhishu.png" width="56rpx" height="53rpx"></my-img>
                  <text>指数+</text>
                </view>
                <view class="item-icon">
                  <my-img src="/static/money/zhuanqu.png" width="53rpx" height="53rpx"></my-img>
                  <text>定投专区</text>
                </view>
                <view class="item-icon">
                  <my-img src="/static/money/jinxuan.png" width="54rpx" height="51rpx"></my-img>
                  <text>蚂蚁保金选</text>
                </view>
                <view class="item-icon">
                  <my-img src="/static/money/more.png" width="54rpx" height="54rpx"></my-img>
                  <text>更多</text>
                </view>
              </view>
            </view>
          </swiper-item>
        </swiper>
        
        <!-- 自定义指示器 -->
        <view class="custom-indicator">
          <view 
            v-for="(item, index) in 2" 
            :key="index"
            class="indicator-item"
            :class="{ 'active': currentSwiperIndex === index }"
          ></view>
        </view>
      </view>
      </view>
      <!-- 改为swiper区域 -->
   
      
      <ice-img src="/static/money/money-three.png"></ice-img>
      <ice-img src="/static/money/money-four.png"></ice-img>
      <ice-img src="/static/money/money-five.png"></ice-img>
      <ice-img src="/static/money/money-six.png"></ice-img>
      <ice-img src="/static/money/money-seven.png"></ice-img>
      <ice-img src="/static/money/money-eight.png"></ice-img>
      <ice-img src="/static/money/money-nine.png"></ice-img>
    </scroll-view>
  </view>
  <my-tab :current="currentTab"></my-tab>

</template>
<script setup>
import {
  onShow, onLoad
} from '@dcloudio/uni-app'
import { ref } from 'vue'
onLoad(() => {
  uni.hideTabBar({
    animation: false,
    fail: () => {
      // 捕获报错
    }
  });
})
const goNext = (url) => {
  uni.navigateTo({
    url:url
  })
}
const searchValue = ref(null)
const currentTab = ref(1)
const currentSwiperIndex = ref(0)

const onSwiperChange = (e) => {
  currentSwiperIndex.value = e.detail.current
}

onShow(() => {
  currentTab.value = 1
})
</script>
<style lang="scss" scoped>
.bac{
  background: linear-gradient(to right, #2C9EFE, #208AFE, #026AFD, );

}
.box-container {
  height: calc(100% - var(--global-tab-height));
  padding-top: 0;
  padding-bottom: 0;

  .icon-area {
    padding-top: 32rpx;
    background: #FEFEFE;
    border-radius: 32rpx 32rpx 0 0;
    position: relative;

    .icon-swiper {
      height: 250rpx;
    }

    .swiper-content {
      height: 100%;
      
      .bottom {
        margin-bottom: 36rpx;
      }

      .item-icon {
        flex: 1;
        font-size: 24rpx;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        text {
          margin-top: 16rpx;
        }
      }
    }

    .custom-indicator {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8rpx;
     padding-top: 24rpx;
      padding-bottom: 20rpx;

      .indicator-item {
        width: 12rpx;
        height: 12rpx;
        border-radius: 50%;
        background-color: #DDDDDD;
        // transition: all 0.3s ease;

        &.active {
          width: 32rpx;
          height: 8rpx;
          border-radius: 4rpx;
          background-color: #1678FF;
        }
      }
    }
  }

  .price-area {
    margin:  0;
    padding: 40rpx 24rpx 24rpx 24rpx;

    .num {
      font-size: 56rpx;
      // font-weight: bold;
      color: #fff;
    }

    .eyes {
      margin: 0 28rpx;
    }

    .desc {
      font-size: 26rpx;
      color: #fff;
      opacity: 0.5;
      line-height: 1.5;
    }


    .border-gap {
      margin: 0 24rpx;
      width: 0;
      height: 105rpx;
      border: 1rpx solid #FFFFFF;
      opacity: 0.5;
    }




  }


  .money-one {
    padding-left: 24rpx;
    padding-right: 24rpx;


    .price-area {
      padding-top: 40rpx;
    }


  }
}
</style>


