<template>
    <view class="box-container">
        <scroll-view scroll-y class="base-layout" @scroll="scrollChange">
            <ice-img src="/static/moneyPage/ylj-bac.png"></ice-img>
            <view class="nav-con flex-center" :style="{ backgroundColor: `rgba(255, 255, 255, ${scrollOpacity})` }">
                <view class="icon-con">
                    <uni-icons @click="backOne" type="left" size="var(--left-icon-size)"></uni-icons>
                </view>
                <my-view size="32" class="flex-one global-center">养老金</my-view>
                <!-- <my-img src="/static/me/server.png" width="40rpx" height="40rpx"></my-img> -->
            </view>
            <view class="safe-area-bottom-filler" />
        </scroll-view>
    </view>


</template>
<script setup>
import * as _ from 'lodash'
import { ref } from 'vue'
import glbFunc from '@/utils/globalFunc'
const { backOne } = glbFunc()

const scrollOpacity = ref(0)

// 使用示例
const scrollChange = _.throttle((e) => {
    const scrollTop = e.detail.scrollTop
    const maxScroll = uni.upx2px(200) // 200rpx滚动距离内完成透明度变化
    let opacity = scrollTop / maxScroll
    opacity = Math.min(Math.max(opacity, 0), 1) // 限制在0-1之间
    scrollOpacity.value = opacity
}, 100);

</script>
<style lang="scss" scoped>
@import '/styles/scroll.scss'
</style>
