<template>
    <div class="container" @click="handleGalleryClick">
        <div class="wrapper">
            <swiper :options="swiperOption">
                <swiper-slide  v-for="item of imgs" :key="item">
                    <img class="gallery-img" :src="item" alt="" />
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination">1/1</div>
            </swiper>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CommonGallery', 
        props: {
            imgs: Array
        },
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    paginationType: 'fraction',
                    observeParents: true,   //  解决隐藏之后 轮播图不能滑动问题 原理检测到父级元素宽度变化之后重新加载一次
                    observer: true          //  解决隐藏之后 轮播图不能滑动问题 原理检测到父级元素宽度变化之后重新加载一次
                },
            }
        },
        methods: {
            handleGalleryClick () {
                this.$emit('close');
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .container >>> .swiper-container
        overflow: inherit
    .container
        display: flex
        flex-direction: column
        justify-content: center
        z-index: 9
        position: fixed
        left: 0
        right: 0
        top: 0
        bottom: 0
        background: #000
        .wrapper
            height: 0
            width: 100%
            padding-bottom: 100%
            .gallery-img
                width: 100%
            .swiper-pagination
                color: #fff
                bottom: -2rem
</style>