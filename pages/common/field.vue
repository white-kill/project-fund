<template>
    <view class="flex-center" @click="goUrl(website)" >
        <view class="field-img ">
            <my-img class="img-right" :src=url width="52rpx" height="60rpx"></my-img>
        </view>
        <view class="flex-one field-height flex-center" :style="{'border-bottom':isBorder ? ('2rpx solid ' + borderColor) : 'none'}" >
        <view class="flex-one text-value">  {{ modelValue }}</view>  
        <uv-icon class="me-right" :bold="isBold" name="arrow-right" :color="color" :size="size"></uv-icon> 
        </view>
    </view>
</template>
<script setup>
const props = defineProps({
    borderColor: {
        type: String,
        default: '#F9F9F9'
    },
    modelValue: {
        type: String,
        default: ''
    },
     color: {
        type: String,
        default: '#E6E6E6'
    },
    isBorder: {
        type: Boolean,
        default: true
    },
    isBold: {
        type: Boolean,
        default: false
    },
    url: {
        type: String
    },
     size: {
        type: String,
        default: '36rpx'
    },
     website: {
        type: String
    },
})

const goUrl = (website) => { 
    uni.navigateTo({
        url: website
    })
}
</script>
<style lang="scss" scoped>
.img-right {
    
    margin:0 24rpx;
}



.field-height {
    height: 86rpx;
}
.text-value{
    font-size: 32rpx;
}
</style>