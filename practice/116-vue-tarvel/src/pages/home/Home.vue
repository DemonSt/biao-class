<template>
    <div>
        <HomeHeader :city="location"></HomeHeader>
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
                location: '',
                swiperList: [],
                ClassifyIcon: [],
                recommendList: [],
                weekendList: []
            }
        },
        methods: {
            getHomeInfo () {
                axios.get('api/index.json')    
                    .then(this.getHomeInfoSucc)
            },
            getHomeInfoSucc (res) {
                res = res.data;
                if(res.ret && res.data){
                    const data = res.data;
                    this.location = data.location;
                    this.swiperList = data.swiperList;
                    this.ClassifyIcon = data.ClassifyIcon;
                    this.recommendList = data.recommendList;
                    this.weekendList = data.weekendList;
                }
            }
        },
        mounted () {
            this.getHomeInfo();
        },
    }
</script>

<style></style>
