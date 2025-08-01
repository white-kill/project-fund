<template>
  <view>
    <uv-tabbar :fixed="false" :value="current" :style="current == 2 ? 'background-color: #1A1A1A;' : ''" :border="false"
      zIndex="9" @change="changeTab" :class="`tabbar-bg-${current}`">
      <uv-tabbar-item :text="current == 0 ? '' : '首页'">
        <template #active-icon>
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
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { applyThemePreset, setPageTheme } from '@/utils/virtualKeyUtils.js'

const props = defineProps({
  current: {
    type: Number,
    default: 0
  }
})

// 根据tab索引获取对应的主题配置
const getThemeByTabIndex = (tabIndex) => {
  const themeMap = {
    0: { // 首页
      backgroundColor: '#FFFFFF',
      statusBarStyle: 'dark',
      lightNavigationBar: false
    },
    1: { // 理财
      backgroundColor: '#FFFFFF',
      statusBarStyle: 'dark',
      lightNavigationBar: false
    },
    2: { // 视频
      backgroundColor: '#1A1A1A',
      statusBarStyle: 'light',
      lightNavigationBar: true
    },
    3: { // 消息
      backgroundColor: '#FFFFFF',
      statusBarStyle: 'dark',
      lightNavigationBar: false
    },
    4: { // 我的
      backgroundColor: '#FFFFFF',
      statusBarStyle: 'dark',
      lightNavigationBar: false
    }
  }

  return themeMap[tabIndex] || themeMap[0]
}

// 应用主题设置
const applyTheme = (tabIndex) => {
  const theme = getThemeByTabIndex(tabIndex)
  setPageTheme(theme)
}

// 页面进入时设置虚拟按键背景色
onMounted(() => {
  applyTheme(props.current)
})

// 监听current变化，动态更新主题
watch(() => props.current, (newCurrent) => {
  applyTheme(newCurrent)
})

// 页面离开时恢复默认背景色
onUnmounted(() => {
  applyThemePreset('light')
})

const goTab = (url) => {
  uni.switchTab({
    url: url,
  })
}

const changeTab = (e) => {
  // 切换tab时先更新虚拟按键背景色
  applyTheme(e)

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

// 不同tab的背景色样式
:deep(.tabbar-bg-0 .uv-tabbar__content) {
  background-color: #FFFFFF;
}

:deep(.tabbar-bg-1 .uv-tabbar__content) {
  background-color: #F5F5F5;
}

:deep(.tabbar-bg-2 .uv-tabbar__content) {
  background-color: #1A1A1A;
}

:deep(.tabbar-bg-3 .uv-tabbar__content) {
  background-color: #F0F0F0;
}

:deep(.tabbar-bg-4 .uv-tabbar__content) {
  background-color: #FAFAFA;
}

// 软键盘相关样式
:deep(.uni-input-input) {
  caret-color: var(--primary-color, #007AFF);
}

// 针对不同平台的虚拟按键样式适配
/* #ifdef APP-PLUS */
.virtual-key-dark {
  background-color: #1A1A1A;
}

.virtual-key-light {
  background-color: #FFFFFF;
}
/* #endif */

/* #ifdef H5 */
// H5环境下的键盘样式
:deep(.uni-input-wrapper) {
  background-color: inherit;
}
/* #endif */
</style>
