import  * as constants  from './constants';
import axios from 'axios';

export const getDetailInfo = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id).then((res) =>{
      const value = res.data.data;
      dispatch(getDetailData(value));
    }).catch(() => {
      console.log('error');
    })
  }
};

const getDetailData = (data) => ({
  type: constants.GET_DETAIL_INFO,
  title: data.title,
  content: data.content
});