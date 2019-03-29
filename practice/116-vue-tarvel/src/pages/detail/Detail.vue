<template>
    <div>
        <DetailBanner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></DetailBanner>
        <DetailHeader></DetailHeader>
        <div class="aaa">
            <DetailList :categoryList="categoryList"></DetailList>
        </div>
    </div>
</template>

<script>
    import DetailBanner from './components/Banner.vue';
    import DetailHeader from './components/Header.vue';
    import DetailList from './components/List.vue';
    import { mapState } from 'vuex';
    import axios from 'axios';
    export default {
        name: 'Detail',
        data() {
            return {
                sightName: '',
                bannerImg: '',
                gallaryImgs: [],
                categoryList: [],
                lastCityPage: ''
            }
        },
        components: {
            DetailBanner,
            DetailHeader, 
            DetailList 
        },
        methods: {
            // 请求详情页面时 每一页的数据都不同 后面跟着ID值 （因为已经在路由里定义了动态绑定 所以后面加上这段代码）
            getDetailInfo () {
                axios.get('/static/mock/detail.json', {
                    params: {
                        id: this.$route.params.id
                    }
                }).then(this.handleGetDetailInfoSucc)
            },
            handleGetDetailInfoSucc (res) {
                res = res.data;
                if(res.ret && res.data){
                    const data = res.data;
                    this.sightName = data.sightName;
                    this.bannerImg = data.bannerImg;
                    this.gallaryImgs = data.gallaryImgs;
                    this.categoryList = data.categoryList;
                }
            }
        },
        computed: {
            ...mapState (['cityPage'])
        },
        mounted() {
            // this.lastCityPage = this.cityPage;
            this.getDetailInfo();
        },
        // activated() {
        //     if(this.lastCityPage !== this.cityPage) {
        //         this.lastCityPage = this.cityPage;
        //         this.getDetailInfo();
        //     };
        // },
    }
</script>

<style lang="stylus" scoped>
    .aaa
        height 20rem;
</style>

