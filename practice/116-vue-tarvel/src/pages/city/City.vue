<template>
    <div>
        <CityHeader></CityHeader>
        <CitySearch :cities="cities"></CitySearch>
        <CityList :cities="cities" :hot="hotCities" :letter="letter"></CityList>
        <CityAlphabet :cities="cities"  @change="handleLetterChange"></CityAlphabet>
    </div>
</template>

<script>
    import CityHeader from './components/Header';
    import CitySearch from './components/Search';
    import CityList from './components/List';
    import CityAlphabet from './components/Alphabet';
    import axios from 'axios';
    export default {
        name: 'City',
        components: {
            CityHeader,
            CitySearch,
            CityList,
            CityAlphabet,
        },
        data () {
            return {
                cities: {},
                hotCities: [],
                alphabet: [],
                letter: ''
            }
        },
        methods: {
            getCityInfo () {
                axios.get('/static/mock/city.json')
                    .then(this.handleGetCityInfoSucc)
            },
            handleGetCityInfoSucc (res) {
                res = res.data;
                if(res.ret && res.data){
                    const data = res.data;
                    this.cities = data.cities;
                    this.hotCities = data.hotCities;
                    this.alphabet = data.alphabet;
                };
            },
            handleLetterChange (letter) {
                this.letter = letter;
            }
        },
        mounted () {
            this.getCityInfo();
        },
    }
</script>

<style lang="stylus" scoped></style>
