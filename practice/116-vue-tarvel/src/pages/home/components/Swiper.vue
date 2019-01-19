<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="" />
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: 'HomeSwiper',
        data () {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    loop: true
                },
                swiperList: [
                    {
                        id: '001',
                        imgUrl: require('@/assets/img/swiper1.jpg')
                    },
                    {
                        id: '002',
                        imgUrl: require('@/assets/img/swiper2.jpg')
                    },
                    {
                        id: '003',
                        imgUrl: require('@/assets/img/swiper3.jpg')
                    },
                ]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background: #fff; 
    .wrapper
        overflow: hidden;
        width: 100%;
        height: 0;
        padding-bottom: 28%;
        .swiper-img
            width: 100%;
</style>
