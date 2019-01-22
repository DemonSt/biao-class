<template>
    <div>
        <div class="search">
            <input v-model="searchValue" class="search-input" type="text" placeholder="输入城市名或拼音">
        </div>
        <!--   v-show="searchValue" 很重要 它的 z-index 导致它突出一层，会让其他功能失效， 所以只有输入的时候才能启用它 -->
        <div class="search-content" ref="searchWrapper" v-show="searchValue">
            <ul>
                <li class="search-item border-bottom" v-for="item of list" :key="item.id">{{item.name}}</li>
                <li class="search-item border-bottom" v-show="handleNullData">没有找到匹配项</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll';
    export default {
        name: 'CitySearch',
        props: {
            cities: Object
        },
        data () {
            return {
                searchValue: '',
                timer: null,
                list: [],
            }
        },
        watch: {
            searchValue () {
                if(!this.searchValue){
                    return this.list = [];
                }
                if(this.timer){
                    clearTimeout(this.timer);
                };
                this.timer = setTimeout(() => {
                    const result = [];
                    for(let i in this.cities){
                        this.cities[i].forEach(letter => {
                            if(letter.spell.indexOf(this.searchValue) > -1 || letter.name.indexOf(this.searchValue) > -1){
                                result.push(letter);
                            }
                        });
                    }
                    this.list = result;
                }, 100);
            }
        },
        computed: {
            handleNullData () {
                return !this.list.length;
            }
        },
        mounted() {
            this.scroll = new Bscroll (this.$refs.searchWrapper);
        },
    }
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl';
    .search
        height .72rem
        padding 0 .1rem
        background $bgColor
        .search-input 
            box-sizing border-box
            width 100%
            height .62rem
            padding 0 .1rem
            line-height .62rem
            text-align center
            border-radius .06rem
            color #777
    .search-content
        z-index 1
        overflow hidden
        position absolute
        top 2.35rem
        left 0
        right 0
        bottom 0
        .search-item
            line-height .62rem
            padding-left .2rem
            background #fff
            color #777
</style>