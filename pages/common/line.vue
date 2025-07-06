<template>
    <view class="flex-center line-con">
        <view class="left" :style="{ color: color }">
            {{ leftValue }}
        </view>
        <view class="right flex-one flex-end">
            {{ rightValue }}
        </view>
    </view>
</template>
<script setup>
const props = defineProps({
    color: {
        type: String,
        default: '#797979'
    },
    leftValue: {
        type: String,
        default: ''
    },
    rightValue: {
        type: String,
        default: ''
    }
})


</script>
<style lang="scss" scoped>
.line-con {
$text-size: 32rpx;   
padding-bottom: 30rpx;
    .left {
        font-size: $text-size;
        padding-right: 67rpx;
    }

    .rigth {
        font-size: $text-size;
    }
}
</style>