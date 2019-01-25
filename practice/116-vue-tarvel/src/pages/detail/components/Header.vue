<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="showHeaderAbs">
            <div class="iconfont header-abs-back">&#xe6f0;</div>
        </router-link>
        <div class="header-fixed" :style="opacityStyle">
            <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe6f0;</div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DetailHeader',
        data() {
            return {
                showHeaderAbs: true,
                opacityStyle: {
                    opacity: 0,
                }
            }
        },
        // 因为使用了keep-alive 所以页面一加载就会执行activated生命周期函数 所以用它来监听滚动事件 在返回按钮和头部取反显示之后
        // 拿到滚动距离 在140的时候全部显示出来 判断 当大于140的时候opacity始终为1 小于的时候就当前值 然后替换调data里面的 opacityStyle
        methods: {
            handleScroll () {
                const top = document.documentElement.scrollTop;
                if(top > 10) {
                    let opacity = top / 140;
                    opacity = opacity > 1 ? 1 : opacity;
                    this.opacityStyle = { opacity : opacity };
                    this.showHeaderAbs = false;
                }else {
                    this.showHeaderAbs = true;
                }
            }
        },
        mounted () {
            window.addEventListener('scroll', this.handleScroll);
        },
        // 解绑 节约性能
        unmounted () {
            window.removeEventListener('scroll', this.handleScroll);
        },
    }
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl';
    .header-abs
        position: absolute
        left: .2rem
        top: .2rem
        width: .8rem
        height: .8rem
        line-height: .8rem
        border-radius: .4rem
        text-align: center
        background: rgba(0, 0, 0, .4)
        .header-abs-back
            color: #fff
            font-size: .4rem
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