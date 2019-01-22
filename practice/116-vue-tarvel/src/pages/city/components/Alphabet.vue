<template>
    <ul class="list">
        <li 
        class="item" 
        v-for="item of letters" 
        :key="item" 
        :ref="item"
        @click="handleChangeClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        >
            {{item}}
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'CityAlphabet',
        props: {
            cities: Object
        },
        data () {
            return {
                touchStatus: false,
                startY: null,
                timer: false
            }
        },
        // 因为cities是一个对象， 需要转换成一个数组 在使用 ：ref={{item}}的时候使用他的下标 this.$refs['A'][0] 
        computed: {
            letters () {
                const letters = [];
                for(let i in this.cities){
                    letters.push(i);
                };
                // console.log(letters);
                return letters;
            }
        },
        methods: {
            handleChangeClick (e) {
                this.$emit('change', e.target.innerText);
            },
            handleTouchStart () {
                this.touchStatus = true;
            },
            handleTouchMove (e) {
                if(this.touchStatus){
                    if(this.timer){
                        clearTimeout(this.timer);
                    }
                    this.timer = setTimeout(() => {
                        // 字母A距离 header下沿的值       手指触摸点距离 header下沿的值
                        const touchY = e.touches[0].clientY - 85;
                        const index = Math.floor((touchY - this.startY) / 18);
                        if(index >= 0 && index < this.letters.length){
                            this.$emit('change', this.letters[index]);
                        }
                    }, 16); 
                }
            },
            handleTouchEnd () {
                this.touchStatus = false;
            }
        },
        updated() {
            this.startY = this.$refs['A'][0].offsetTop;
        },
    }
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl';
    .list
        display flex
        flex-direction column
        justify-content center
        position absolute
        top 1.58rem
        right 0
        bottom 0
        width .4rem
        .item
            line-height .36rem
            text-align center
            color $bgColor
            font-size .15rem
</style>