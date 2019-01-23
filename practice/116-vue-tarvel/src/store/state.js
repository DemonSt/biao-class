let defaultCity = '杭州';

try {
    if(localStorage.city) 
        defaultCity = localStorage.city;
} catch (e) {
    defaultCity = '杭州';
}

export default {
    city: defaultCity,
}