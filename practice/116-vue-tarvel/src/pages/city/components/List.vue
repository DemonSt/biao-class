<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">秦都</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">字母排序</div>
                <div class="button-list">
                    <div class="alphabet-wrapper" @click="handleChangeClick" v-for="(item, key) of cities" :key="key">
                        <div class="alphabet">{{key}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item of hot" :key="item.id">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id">{{innerItem.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll';
    export default {
        name: 'CityList',
        props: {
            hot: Array,
            cities: Object,
            letter: String
        },
        data () {
            return {
                target: ''
            }
        },
        methods: {
            handleChangeClick (e) {
                this.target = e.target.innerText;
            }
        },
        mounted() {
            this.scroll = new Bscroll (this.$refs.wrapper); 
        },
        // 拿到点击的字母， 引用类型复制给数据  监听该数据回调函数
        watch: {
            letter () {
                if(this.letter){
                    const element = this.$refs[this.letter][0];
                    this.scroll.scrollToElement(element);
                }
            },
            target () {
                if(this.target){
                    console.log(this.$refs);   // 重点
                    const element = this.$refs[this.target][0];
                    this.scroll.scrollToElement(element);
                }
            }
        },
    }
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl';
    .border-topbottom
        &:before
            border-color #ccc
        &:after
            border-color #ccc
    .border-bottom
        &:before
            border-color #ccc
    .list
        overflow hidden
        position absolute
        top 2.34rem
        left 0
        right 0
        bottom 0
        .title
            line-height .54rem
            background #efefef
            padding-left .2rem
            color #777
            font-size .26rem
        .button-list
            overflow hidden
            padding .1rem .6rem .1rem .1rem
            .button-wrapper
                float left
                width 33.33%
                .button
                    margin .1rem
                    padding .1rem 0
                    text-align center
                    border .02rem solid #cdcdcd
                    border-radius .08rem
            .alphabet-wrapper
                float left
                width 16.66%
                .alphabet
                    margin .1rem
                    padding .16rem 0
                    text-align center
        .item-list
            .item
                line-height .76rem
                color #777
                padding-left .2rem

</style>