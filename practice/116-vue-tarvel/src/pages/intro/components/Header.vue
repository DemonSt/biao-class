<template>
    <div>
        <div class="header-fixed">
            <router-link to="/detail/0001" tag="div">
                <div class="iconfont header-fixed-back">&#xe6f0;</div>
                详情介绍
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'IntroHeader',
    }
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl';
    .header-fixed
        z-index 2
        position fixed
        top: 0
        left: 0
        right: 0
        height .86rem
        line-height .86rem
        text-align center
        color: #fff
        background: $bgColor
        font-size: .32rem
        .header-fixed-back
            position absolute
            top: 0
            left: 0
            width: .64rem
            text-align center
            font-size: .4rem
            color: #fff
</style>