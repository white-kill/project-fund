<template>
  <view>
    <uv-tabbar :fixed="false" :value="current" zIndex="9" @change="changeTab">
      <uv-tabbar-item text="首页">
        <template #active-icon>
          <my-img height="44rpx" width="44rpx" src="/static/house/house-tabone.png"></my-img>
        </template>
        <template #inactive-icon>
          <my-img height="44rpx" width="44rpx" src="/static/house/house-tabone.png"></my-img>

        </template>
      </uv-tabbar-item>
      <uv-tabbar-item text="理财">
        <template #active-icon>
          <my-img height="44rpx" width="44rpx" src="/static/house/house-tabtwo-light.png"></my-img>
        </template>
        <template #inactive-icon>
          <my-img height="44rpx" width="44rpx" src="/static/house/house-tabtwo-light.png"></my-img>
        </template>
      </uv-tabbar-item>
      <uv-tabbar-item text="我的">
        <template #active-icon>
           <my-img height="44rpx" width="44rpx" src="/static/house/house-tabthree.png"></my-img>
        </template>
        <template #inactive-icon>
            <my-img height="44rpx" width="44rpx" src="/static/house/house-tabthree.png"></my-img>

        </template>
      </uv-tabbar-item>
    </uv-tabbar>
  </view>
</template>

<script setup>

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
      goTab('/pages/house/account')
      break
    case 1:
      goTab('/pages/house/server')
      break
    case 2:
      goTab('/pages/house/me')
      break

  }
}
</script>

<style lang="scss" scoped>
:deep(.uv-tabbar) {
  height: var(--global-tab-height);
  padding-bottom: 0;
}
</style>