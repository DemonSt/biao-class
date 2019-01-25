<template>
    <div>
        <div class="banner" @click="handleGalleryShow">
            <img :src="this.bannerImg" alt="" class="banner-img">
            <div class="banner-info">
                <div class="banner-tittle">{{this.sightName}}</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe7b3;</span>
                    {{this.gallaryImgs.length}}
                </div>
            </div>
        </div>
        <div class="banner-info-wrapper">
            <div class="banner-info-bottom">
                <div class="banner-info-left">
                    <div class="banner-graded">
                        <span class="banner-graded-number">5.0</span>
                        <span class="banner-graded-describe"> 分 超赞</span>
                    </div>
                    <div class="banner-comment">
                        <p>344468条评论 93条攻略</p>
                    </div>
                    <div class="iconfont banner-info-go">&#xe61d;</div>
                </div>
                <div class="banner-info-right">
                    <div class="banner-intro">景点简介</div>
                    <div class="banner-time">开放时间·贴士</div>
                    <div class="iconfont banner-info-go">&#xe61d;</div>
                </div>
            </div>
            <div class="site">
                <div class="iconfont banner-info-site">&#xe644;</div>
                北京市东城区景山前街4号
                <div class="iconfont banner-info-go">&#xe61d;</div>
            </div>
        </div>
        <FadeAnimation>
            <CommonGallery :imgs="gallaryImgs" @close="handleGalleryClose" v-show="showGallery"></CommonGallery>
        </FadeAnimation>
    </div>
</template>

<script>
    import CommonGallery from '@/common/gallery/Gallery.vue'
    import FadeAnimation from '@/common/fade/FadeAnimation.vue'
    export default {
        name: 'DetailBanner',
        props: {
            sightName: String,
            bannerImg: String,
            gallaryImgs: Array
        },
        components: {
            CommonGallery,
            FadeAnimation
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
    @import '~@/assets/styles/varibles.styl';
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
    .banner-info-wrapper
        padding .23rem
        font-family sans-serif
        border-radius .14rem .14rem 0 0
        position relative
        bottom .03rem
        .banner-info-bottom
            overflow hidden
            padding-bottom .2rem
            border-bottom 1px solid #efefef
            .banner-info-left
                position relative
                float left
                border-right 1px solid #ededed
                padding-right .9rem
                .banner-graded
                    color #ff8c12
                    line-height 1.2
                    .banner-graded-number
                        font-size .45rem
                    .banner-graded-describe
                        font-size .27rem
                .banner-comment
                    p
                        font-size .21rem
                        color #999
                        line-height 1.3
                .banner-info-go 
                    position absolute
                    top .35rem
                    right .1rem
            .banner-info-right
                position relative
                float left
                padding-left .24rem
                padding-right 1.6rem
                .banner-intro
                    font-size .28rem
                    padding .18rem .18rem .12rem 0
                .banner-time
                    font-size .21rem
                    color #999
                    line-height 1
                .banner-info-go 
                    position absolute
                    top .35rem
                    right 0
        .site
            padding-top .3rem
            padding-bottom .2rem
            color #212121
            border-bottom 1px solid #efefef
            .banner-info-site
                display inline-block
                padding-right .2rem
            .banner-info-go
                display inline-block
                padding-left 2.7rem
</style>