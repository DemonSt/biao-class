<template>
    <div>
        <div class="item" v-for="item of categoryList" :key="item.id">
            <div class="item-title border-bottom">
                <span class="item-title-icon"></span>
                {{item.title}}
            </div>
            <div class="item-chilren" v-if="item.children">
                <DetailList :categoryList="item.children"></DetailList>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DetailList',
        props: {
            categoryList: Array
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl';
    .item-title-icon
        position: relative
        left: .06rem
        top: .06rem
        display: inline-block
        width: .36rem
        height: .36rem
        background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
        margin-right: .1rem
        background-size: .4rem 3rem
    .item-title
        line-height: .8rem
        font-size: .3rem
        padding: 0 .2rem
    .item-chilren
        padding: 0 .3rem
</style>