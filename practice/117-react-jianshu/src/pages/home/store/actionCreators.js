import  * as constants  from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) =>{
      const value = res.data.data;
      dispatch(getHomeData(value));
    }).catch(() => {
      console.log('error');
    })
  }
};
export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) =>{
      const value = res.data.data;
      dispatch(addHomeList(value, ++page));
    })
  }
};
export const showScroll = (show) => ({
  type: constants.SHOW_SCROLL_TOP,
  show
})

const getHomeData = (data) => ({
  type: constants.GET_HOME_INFO,
  topicList: data.topicList,
  articleList: data.articleList,
  recommendList: data.recommendList,
});
const addHomeList = (list, nextPage) => ({
  type: constants.ADD_HOME_LIST,
  list: fromJS(list),
  nextPage: fromJS(nextPage)
})