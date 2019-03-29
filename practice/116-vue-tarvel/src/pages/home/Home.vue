<template>
    <div>
        <HomeHeader></HomeHeader>
        <HomeSwiper :list="swiperList"></HomeSwiper>
        <HomeIcons :list="ClassifyIcon"></HomeIcons>
        <HomeRecommend :list="recommendList"></HomeRecommend>
        <HomeWeekend :list="weekendList"></HomeWeekend>
    </div>
</template>

<script>
    import HomeHeader from './components/Header';
    import HomeSwiper from './components/Swiper';
    import HomeIcons from './components/Icons';
    import HomeRecommend from './components/Recommend';
    import HomeWeekend from './components/Weekend';
    import { mapState } from 'vuex';
    import axios from 'axios';
    export default {
        name: 'Home',
        components: {
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeRecommend,
            HomeWeekend,
        },
        data () {
            return {
                swiperList: [],
                ClassifyIcon: [],
                recommendList: [],
                weekendList: [],
                lastCityPage: ''
            }
        },
        methods: {
            getHomeInfo () {
                axios.get('/static/mock/index.json?city=' + this.city)    
                    .then(this.getHomeInfoSucc)
            },
            getHomeInfoSucc (res) {
                res = res.data;
                if(res.ret && res.data){
                    const data = res.data;
                    this.swiperList = data.swiperList;
                    this.ClassifyIcon = data.ClassifyIcon;
                    this.recommendList = data.recommendList;
                    this.weekendList = data.weekendList;
                }
            }
        },
        computed: {
            ...mapState (['city'])
        },
        mounted () {
            this.lastCity = this.city;
            this.getHomeInfo();
        },
        // 当页面数据变化 重新加载时 重新发送axios请求， 不变化的页面会继续使用之前缓存的数据
        activated() {
            if(this.lastCity !== this.city) {
                this.lastCity = this.city;
                this.getHomeInfo();
            };
        },
    }
</script>

<style></style>
