<template>
  <view class="ice-search">
  <uv-input :style="{'border':isBlue? '2rpx solid #1778FB!important':'transparent!important'}" class="input-area" :readonly="isReadonly" fontSize="32rpx" :placeholder="placeholder" shape="circle" border="surround"
            v-model="searchValue" @click="goNext" @input="handleInput">
    <template v-slot:prefix>
      <my-img src="/static/money/search.png" width="30rpx" height="30rpx"></my-img>
    </template>
    <template v-slot:suffix>
      <view class="global-flex">
        <view class="border-blue"></view>
        <view class="search">搜索</view>
      </view>
    </template>
  </uv-input>
  </view>

</template>

<script setup>
import { ref ,watch} from 'vue';

const props = defineProps({
  placeholder: {
    type: String,
    default: '住房公积金'
  },
  isReadonly: {
    type: Boolean,
    default: false
  },
  isBlue:{
    type: Boolean,
    default: true
  },
  modelValue: String // 接收父组件传入的绑定值
});
// 监听 input 事件
function handleInput(event) {
  emit('input', event);
}
const searchValue = ref(props.modelValue); // 内部绑定值
const emit = defineEmits(['update:modelValue', 'click','input']);
// 点击事件
function goNext() {
  emit('click');
}

// 监听内部绑定值的变化，通知父组件更新
watch(searchValue, (newValue) => {
  emit('update:modelValue', newValue);
});
</script>

<style lang="scss" scoped>
:deep(.uv-input__content__prefix-icon){
  
  margin: 0 12rpx 0 6rpx;
}
.input-area {
  margin: 0 24rpx 0 24rpx;
}
.border-blue {
  width: 2rpx;
  height: 32rpx;
  border: 2rpx solid #1679FB;
}
.search {
  margin: 0 12rpx 0 24rpx;
  color: #1471F2;
}
</style>