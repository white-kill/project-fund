<template>
  <view>
    <uv-tabbar :fixed="false" :value="current" :style="current == 2 ? 'background-color: #1A1A1A;' : ''" :border="false"
      zIndex="9" @change="changeTab" :class="`tabbar-bg-${current}`">
      <uv-tabbar-item :text="current==0 ? '' : '首页'">
        <template #active-icon >
          <my-img height="76rpx" width="76rpx" src="/static/tab/tab-two.png"></my-img>
        </template>
        <template #inactive-icon>
          <my-img height="44rpx" width="44rpx" src="/static/tab/tab-three.png"></my-img>
        </template>
      </uv-tabbar-item>
      <uv-tabbar-item text="理财">
        <template #active-icon>
          <my-img height="44rpx" width="44rpx" src="/static/tab/tab-sec-light.svg"></my-img>
        </template>
        <template #inactive-icon>
          <my-img height="44rpx" width="44rpx" src="/static/tab/tab-four.png"></my-img>

        </template>
      </uv-tabbar-item>
      <uv-tabbar-item text="视频">
        <template #active-icon>
                  <my-img height="42rpx" width="42rpx" src="/static/tab/tab-three.svg"></my-img>

        </template>
        <template #inactive-icon>
                   <my-img height="42rpx" width="42rpx" src="/static/tab/tab-five.png"></my-img>

        </template>
      </uv-tabbar-item>
      <uv-tabbar-item text="消息">
        <template #active-icon>
          <my-img height="44rpx" width="44rpx" src="/static/tab/tab-four-light.svg"></my-img>
        </template>
        <template #inactive-icon>
           <my-img height="44rpx" width="44rpx" src="/static/tab/tab-six.png"></my-img>
        </template>
      </uv-tabbar-item>
      <uv-tabbar-item text="我的">
        <template #active-icon>
          <my-img height="42rpx" width="42rpx" src="/static/tab/tab-eight.png"></my-img>

        </template>
        <template #inactive-icon>
          <my-img height="42rpx" width="42rpx" src="/static/tab/me-tab.png"></my-img>

        </template>
      </uv-tabbar-item>
    </uv-tabbar>
  </view>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  current: {
    type: Number,
    default: 0
  }
})

const goTab = (url) => {
  uni.switchTab({
    url: url,
  })
}

const changeTab = (e) => {
  // 页面跳转逻辑
  switch (e) {
    case 0:
      goTab('/pages/home/home')
      break
    case 1:
      goTab('/pages/home/money')
      break
    case 2:
 
      goTab('/pages/home/video')
      break
    case 3:
      goTab('/pages/home/msg')
      break
    case 4:
      goTab('/pages/home/me')
      break
  }
}
</script>

<style lang="scss" scoped>
:deep(.uv-tabbar) {
  height: var(--global-tab-height);
  padding-bottom: 0;
}


:deep(.tabbar-bg-2 .uv-tabbar__content) {
  background-color: #1A1A1A;
}
</style>