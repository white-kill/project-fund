<template>
    <view class="flex-center" @click="goUrl(website)" >
        <view class="field-img ">
            <my-img class="img-right" :src=url width="52rpx" height="60rpx"></my-img>
        </view>
        <view class="flex-one field-height flex-center" :class="{ 'con-right': isBorder }">
        <view class="flex-one text-value">  {{ modelValue }}</view>  
            <my-img class="me-right" src="/static/me/right.png" width="36rpx" height="36px"></my-img>      
        </view>
    </view>
</template>
<script setup>
const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    isBorder: {
        type: Boolean,
        default: true
    },
    url: {
        type: String
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

.con-right {
    border-bottom: 2rpx solid #F9F9F9;
}

.field-height {
    height: 86rpx;
}
.text-value{
    font-size: 32rpx;
}
</style>