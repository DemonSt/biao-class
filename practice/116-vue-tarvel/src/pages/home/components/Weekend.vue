<template>
    <div>
        <div class="weekend-title">周末去哪嗨</div>
        <ul>
            <li class="item border-bottom" v-for="item of list" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-describe">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Weekend',
        data () {
            return {}
        },
        props: {
            list: Array
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/mixins.styl';
    .weekend-title
        margin-top .2rem
        line-height .8rem
        text-indent .2rem
        background #eee
    .item-img-wrapper
        overflow hidden
        height 0
        padding-bottom 37.09%
        .item-img
            width 100%
    .item-info
        padding .1rem
        .item-title
            line-height .54rem
            font-size .32rem
            ellipsis()
        .item-describe
            line-height .4rem
            color #ccc
            ellipsis()
</style>