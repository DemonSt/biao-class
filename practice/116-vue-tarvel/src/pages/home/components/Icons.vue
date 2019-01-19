<template>
    <div class="icons">
        <div class="icon" v-for="item of ClassifyIcon" :key="item.id">
            <div class="icon-img">
                <img class="icon-img-content" :src="item.imgUrl" alt="">
                <p class="icon-describe">{{item.title}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomeIcons',
        data () {
            return {
                ClassifyIcon: [
                    {
                        id: '001',
                        imgUrl: require('@/assets/img/classify1.png'),
                        title: '景点门票'
                    },
                    {
                        id: '002',
                        imgUrl: require('@/assets/img/classify2.png'),
                        title: '一日游'
                    },
                    {
                        id: '003',
                        imgUrl: require('@/assets/img/classify3.png'),
                        title: '海洋馆'
                    },
                    {
                        id: '004',
                        imgUrl: require('@/assets/img/classify4.gif'),
                        title: '滑雪季'
                    },
                    {
                        id: '005',
                        imgUrl: require('@/assets/img/classify5.png'),
                        title: '千岛湖'
                    },
                    {
                        id: '006',
                        imgUrl: require('@/assets/img/classify6.png'),
                        title: '世界之窗'
                    },
                    {
                        id: '007',
                        imgUrl: require('@/assets/img/classify7.png'),
                        title: '迪士尼'
                    },
                    {
                        id: '008',
                        imgUrl: require('@/assets/img/classify8.png'),
                        title: '野生动物园'
                    },
                    {
                        id: '009',
                        imgUrl: require('@/assets/img/classify9.png'),
                        title: '野生动物园'
                    },
                    {
                        id: '010',
                        imgUrl: require('@/assets/img/classify10.png'),
                        title: '野生动物园'
                    },
                    {
                        id: '011',
                        imgUrl: require('@/assets/img/classify11.png'),
                        title: '野生动物园'
                    },
                ]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl'
    @import '~@/assets/styles/mixins.styl'
    .icons
        overflow: hidden
        height: 0
        padding-bottom: 50%
        .icon
            position: relative
            overflow: hidden
            width: 25%
            height: 0;
            padding-bottom: 25%
            float: left
            .icon-img   
                position: absolute
                top: 0
                left: 0
                right: 0
                bottom: .44rem
                box-sizing: border-box
                padding: .1rem
                .icon-img-content
                    display: block
                    margin: 0 auto
                    height: 100%
            .icon-describe
                position: absolute
                left: 0
                right: 0
                bottom: 0
                height: .1rem
                line-height: .44rem
                text-align: center
                color: $darkTextColor
                // ellipsis()

</style>
