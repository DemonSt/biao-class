<template>
    <div>
        <DetailBanner :sightName="sightName" :bannerImg="bannerImg"></DetailBanner>
        <DetailHeader></DetailHeader>
        <div class="aaa"></div>
    </div>
</template>

<script>
    import DetailBanner from './components/Banner.vue';
    import DetailHeader from './components/Header.vue';
    import axios from 'axios';
    export default {
        name: 'Detail',
        data() {
            return {
                sightName: '',
                bannerImg: '',
                gallaryImgs: [],
            }
        },
        components: {
            DetailBanner,
            DetailHeader,  
        },
        methods: {
            getDetailInfo () {
                axios.get('/api/detail.json')
                    .then(this.getDetailInfoSucc)
            },
            getDetailInfoSucc (res) {
                res = res.data;
                if(res.ret && res.data){
                    const data = res.data;
                    this.sightName = data.sightName;
                    this.bannerImg = data.bannerImg;
                    this.gallaryImgs = data.gallaryImgs;
                    console.log(res);
                }
            }
        },
        mounted() {
            this.getDetailInfo();
        },
    }
</script>

<style lang="stylus" scoped>
    .aaa
        height 20rem;
</style>

