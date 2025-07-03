<template>
  <view class="box-container">
    <new-nav :color="navTextColor" title="花呗 | 信用购" :bg-opacity="opacitys" >
      <template #right>
      </template>
    </new-nav>
    <scroll-view scroll-y class="tab-con" @scroll="onScroll">
      
      <ice-img src="/static/me/tokio-one.png" />
      <ice-img src="/static/me/tokio-two.png" />
      <ice-img src="/static/me/tokio-three.png" />

    
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
  background: var(--input-border)

}
</style>