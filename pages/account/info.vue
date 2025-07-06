<template>
    <view class="box-container">
        <view class="account-bac">
            <new-nav color="#fff" title="住房公积金账户">
                <template #right>
                    <view class="flex-center img-area">
                        <my-img class="star-right" height="56rpx" width="56rpx"
                            src="/static/house/nav-star.png"></my-img>
                        <my-img height="56rpx" width="136rpx" src="/static/house/circle.png"></my-img>
                    </view>
                </template>
            </new-nav>
        </view>
        <scroll-view scroll-y class="tab-con">
            <view class="card">
                <my-line left-value="个人账户状态" :right-value="infoData.status"></my-line>
                <my-line left-value="个人账户余额" :right-value="infoData.balance"></my-line>
                <my-line left-value="个人编号" :right-value="infoData.acccount"></my-line>
                <my-line left-value="中心编号" :right-value="infoData.num"></my-line>
                <my-line left-value="中心名称" :right-value="infoData.name"></my-line>
                <view @click="goDetail" class="flex-end detail">点击查看详情 ></view>
            </view>
            <view class="gap-account"></view>

        </scroll-view>
    </view>

</template>

<script setup>
import { reactive } from 'vue'
const goDetail = () => {
    uni.navigateTo({
        url: '/pages/account/detail'
    })
}
const infoData = reactive({
    status: '正常缴存',
    balance: '9,999.99',
    acccount: '123456789',
    num: '5000000000000',
    name: '南充市住房公积金管理中心'
})
</script>

<style lang="scss" scoped>
$twelve: 12rpx;
.account-bac {
    background: var(--account-color);
}
.detail{
    margin-top:$twelve ;
    color: var(--title-color-sub);
}
.card {
    padding: 15rpx 32rpx 24rpx 36rpx;
}

.star-right {
    margin-right: $twelve;
}

.img-area {
    padding-bottom: $twelve;
}

.gap-account {
    height: var(--global-pad);
    background: #F9F9F9;
}
</style>