<template>
    <div>
        <div class="header">
            城市选择
            <router-link to="/">
                <div class="iconfont header-back">&#xe6f0;</div>
            </router-link>
        </div>
        <div class="classification">
            <span class="span-left">境内</span>
            <span class="span-right">境外·港澳台</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CityHeader',
    }
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl';
    .header
        position relative
        overflow hidden
        height .76rem
        line-height .86rem
        text-align center
        color #fff
        background $bgColor
        font-size .32rem
        .header-back
            position absolute
            top 0
            left 0
            width .64rem
            text-align center
            font-size .5rem
            color #fff
    .classification
        position relative
        overflow hidden
        height .86rem
        line-height .66rem
        text-align center
        color #fff
        background $bgColor
        font-size .32rem
        span
            &:focus
                color $bgColor
                background-color #fff
            padding .07rem .3rem
            border 1px solid #fff
            font-size .28rem
            
        .span-left
            border-radius .05rem 0 0 .05rem
            border-right 0;
        .span-right
            border-radius 0 .05rem .05rem 0
</style>