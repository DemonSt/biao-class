let defaultCity = '杭州';
let defaultCityPage = '';

try {
    if(localStorage.city) 
        defaultCity = localStorage.city;
} catch (e) {
    defaultCity = '杭州';
}

export default {
    city: defaultCity,
    cityPage: defaultCityPage
}