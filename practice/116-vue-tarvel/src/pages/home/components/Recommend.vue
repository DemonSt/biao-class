<template>
    <div>
        <div class="recommend-title">猜你喜欢</div>
        <ul>
            <li class="item border-bottom" v-for="item of list" :key="item.id">
                <img class="item-img" :src="item.imgUrl" alt="">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-describe">{{item.desc}}</p>
                    <button class="item-button">详细信息</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Recommend',
        data () {
            return {}
        },
        props: {
            list: Array
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl';
    @import '~@/assets/styles/mixins.styl';
    .recommend-title
        margin-top .2rem
        line-height .8rem
        text-indent .2rem
        background #eee
    .item    
        overflow hidden
        display flex
        height 1.9rem
        .item-img
            width 1.7rem
            height 1.7rem
            padding .1rem
        .item-info
            flex 1
            padding .1rem
            min-width 0
            .item-title
                line-height .54rem
                font-size .32rem
                ellipsis()
            .item-describe
                line-height .4rem
                color #ccc
                ellipsis()
            .item-button
                line-height .44rem
                margin-top .16rem
                background $bgColor
                padding 0 .2rem
                border-radius .06rem
                color #fff;
</style>