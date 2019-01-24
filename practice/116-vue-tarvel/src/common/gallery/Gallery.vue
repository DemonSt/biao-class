<template>
    <div class="container" @click="handleGalleryClick">
        <div class="wrapper">
            <swiper :options="swiperOption">
                <swiper-slide>
                    <img class="gallery-img" src="http://img1.qunarzz.com/sight/p0/1505/d6/d6a19edb95615a3f.water.jpg_r_800x800_73760833.jpg" alt="" />
                </swiper-slide>
                <swiper-slide>
                    <img class="gallery-img" src="http://img1.qunarzz.com/sight/p0/1504/d3/d37c889face95d4.water.jpg_r_800x800_10302948.jpg" alt="" />
                </swiper-slide>
                <swiper-slide>
                    <img class="gallery-img" src="http://img1.qunarzz.com/sight/p0/1504/9e/9e11811804e1f479.water.jpg_r_800x800_daa2c5ce.jpg" alt="" />
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination">1/1</div>
            </swiper>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CommonGallery', 
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