<template>
    <div>
        <div class="banner" @click="handleGalleryShow">
            <img :src="this.bannerImg" alt="" class="banner-img">
            <div class="banner-info">
                <div class="banner-tittle">{{this.sightName}}</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe7b3;</span>
                    39
                </div>
            </div>
        </div>
        <CommonGallery @close="handleGalleryClose" v-show="showGallery"></CommonGallery>
    </div>
</template>

<script>
    import CommonGallery from '@/common/gallery/Gallery.vue'
    export default {
        name: 'DetailBanner',
        props: {
            sightName: String,
            bannerImg: String,
        },
        components: {
            CommonGallery,
        },
        data() {
            return {
                showGallery: false,
            }
        },
        methods: {
            handleGalleryShow () {
                this.showGallery = true;
            },
            handleGalleryClose () {
                this.showGallery = false;
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom 55%
        .banner-img
            width 100%
        .banner-info
            display flex
            justify-content: space-between;
            position absolute
            left 0
            right 0
            bottom 0
            line-height .6rem
            color #fff
            background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
            .banner-title
                flex 1
                font-size .32rem
                padding 0 .2rem
            .banner-number
                height .32rem
                line-height .32rem
                border-radius .2rem
                margin-top .2rem
                padding 0 .2rem
                background rgba(0, 0, 0, .3)
                font-size .24rem
                text-align right
                .banner-icon
                    font-size .24rem
</style>