<template>
    <view class="box-container">
        <view class="nav-title global-flex">
            <my-img @click="backOne" src="/static/home/left.png" width="15rpx" height="30rpx"></my-img>
            <my-search class="flex-one" placeholder="花呗" v-model="searchValue" @input="handleInput"></my-search>
        </view>
        <!-- 动态显示的图片区域 -->
        <view v-if="isImageVisible" class="dynamic-image-area">
            <my-img @click="goNext" src="/static/home/gjj-select.png" height="774rpx"></my-img>
        </view>
        <view v-else class="down-area">
            <view class="tag-area flex-box">
               
                <view class="tags" @click="goNext">合肥不动产登记</view>
             
                <my-img src="/static/home/ai.png" width="120rpx" height="56rpx"></my-img>
            </view>
            <view class="del flex-box">
                <uv-text size="15" bold text="搜索历史"></uv-text>
                <my-img src="/static/home/delete.png" width="26px" height="28rpx"></my-img>
            </view>
            <view class="tag-area flex-box">
                <view class="tags" @click="goNext">全国住房公积金...</view>
                <view class="tags" @click="goNext">全国公积金账户...</view>
                <view class="tags" @click="goNext">全国住房公积金</view>
            </view>
            <scroll-view scroll-x>
                <view class="img-area flex-box">

                    <uv-image class="img-right" mode="widthFix" src="/static/home/home-gjj.png" width="450rpx"
                        height="600rpx"></uv-image>

                    <uv-image mode="widthFix" src="/static/home/home-gjj-right.png" width="450rpx"
                        height="600rpx"></uv-image>
                </view>
            </scroll-view>


        </view>

    </view>
</template>

<script setup>
import { ref } from 'vue';
import glbFunc from '/utils/globalFunc';
const { backOne,goTo } = glbFunc();
const searchValue = ref(null);
const isImageVisible = ref(false); // 控制图片显示的变量
const goNext = () => {
    goTo('/pages/house/index');
};
// 监听输入框的输入事件
function handleInput(e) {
    if (e) {
        isImageVisible.value = true; // 如果有输入内容，显示图片
    } else {
        isImageVisible.value = false; // 如果清空输入内容，隐藏图片
    }
}
</script>

<style lang="scss" scoped>
$margin: 14rpx;

.box-container {
    background: url('/static/apply/apply-bac.jpg') no-repeat center center / cover;

    .img-right {
        margin-right: 16rpx;
    }

    .dynamic-image-area {
        margin-top: 18rpx;
    }

   

    .down-area {
        padding: 0 $margin;

        .del {
            padding: 32rpx 0 18rpx 0;
        }

        .img-area {
            margin-top: 44rpx;
        }

        .tag-area {
            margin-top: 8rpx;

            .tags {
                display: flex;
                align-items: center;
                font-size: 24rpx;
                color: #000;
                padding: 8rpx 12rpx;
                background: #FFFFFF;
                border-radius: 16rpx;
                margin-right: $margin;
            }
        }

    }
}
</style>