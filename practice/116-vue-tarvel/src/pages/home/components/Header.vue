<template>
    <div class="home-header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe6f0;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe60f;</span>
            输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
            <div class="header-right">
                {{this.city}}
                <span class="iconfont">&#xe644;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        name: 'Header',
        props: {
        },
        computed: {
            ...mapState(['city'])
        },
    }
</script> 

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl';
    .home-header
        display: flex;
        line-height: .86rem;
        background: $bgColor;
        color: #fff;
        .header-left
            wdith: .64rem;
            padding-left: .1rem;
            float: left;
            .back-icon
                text-align: center;
                font-size: .5rem;
        .header-input
            flex: 1;
            height: .64rem;
            line-height: .64rem;
            padding-left: .2rem;
            margin-top: .12rem;
            margin-left: .2rem;
            background: #fff;
            border-radius: .1rem;
            color: #ccc;
        .header-right
            min-width: 1.04rem;
            padding 0 .1rem
            float: right;
            text-align: center;
            color #fff;
</style>
