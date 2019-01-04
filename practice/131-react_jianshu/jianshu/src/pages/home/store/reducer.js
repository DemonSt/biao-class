import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '社会热点',
        imgUrl: 'http://pic-bucket.ws.126.net/photo/0005/2019-01-04/E4ME0EHS4TM10005NOS.jpg',
    },
    {
        id: 2,
        title: '社会热点',
        imgUrl: 'http://pic-bucket.ws.126.net/photo/0005/2019-01-04/E4ME0EHS4TM10005NOS.jpg',
    },
    {
        id: 3,
        title: '社会热点',
        imgUrl: 'http://pic-bucket.ws.126.net/photo/0005/2019-01-04/E4ME0EHS4TM10005NOS.jpg',
    },
    {
        id: 4,
        title: '社会热点',
        imgUrl: 'http://pic-bucket.ws.126.net/photo/0005/2019-01-04/E4ME0EHS4TM10005NOS.jpg',
    },
    {
        id: 5,
        title: '社会热点',
        imgUrl: 'http://pic-bucket.ws.126.net/photo/0005/2019-01-04/E4ME0EHS4TM10005NOS.jpg',
    },],
    articleList: [{
        id: 1,
        title: '此人被称为最强“播种机”，生下过867个儿女，现在无人能破',
        desc: '封建时代为什么会有人争先恐后的要做皇帝，这原因我们也是非常清楚，今天我们要来说一位生育能力非常强的国王，他的一生总共有867个儿女，恐怕再也无人...',
        imgUrl: '//upload-images.jianshu.io/upload_images/11899212-0111893c80ac8ea0?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    },
    {
        id: 2,
        title: '此人被称为最强“播种机”，生下过867个儿女，现在无人能破',
        desc: '封建时代为什么会有人争先恐后的要做皇帝，这原因我们也是非常清楚，今天我们要来说一位生育能力非常强的国王，他的一生总共有867个儿女，恐怕再也无人...',
        imgUrl: '//upload-images.jianshu.io/upload_images/11899212-0111893c80ac8ea0?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    },
    {
        id: 3,
        title: '此人被称为最强“播种机”，生下过867个儿女，现在无人能破',
        desc: '封建时代为什么会有人争先恐后的要做皇帝，这原因我们也是非常清楚，今天我们要来说一位生育能力非常强的国王，他的一生总共有867个儿女，恐怕再也无人...',
        imgUrl: '//upload-images.jianshu.io/upload_images/11899212-0111893c80ac8ea0?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    },
    {
        id: 4,
        title: '此人被称为最强“播种机”，生下过867个儿女，现在无人能破',
        desc: '封建时代为什么会有人争先恐后的要做皇帝，这原因我们也是非常清楚，今天我们要来说一位生育能力非常强的国王，他的一生总共有867个儿女，恐怕再也无人...',
        imgUrl: '//upload-images.jianshu.io/upload_images/11899212-0111893c80ac8ea0?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    },],
    recommendList: [{
        id: 1,
        imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png'
    }, 
    {
        id: 2,
        imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png'
    },
    {
        id: 3,
        imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
    },
    {
        id: 4,
        imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
    },
    {
        id: 5,
        imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
    },]
});

export default (state = defaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }  
}