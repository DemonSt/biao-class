import  * as constants  from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

export const getInputFocus = () => ({
  type: constants.INPUT_FOCUS,
});
export const getInputBlur = () => ({
  type: constants.INPUT_BLUR,
});
export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER,
});
export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE,
});
export const changePageList = (page) => ({
  type: constants.CHANGE_PAGE_LIST,
  page,
});

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) =>{
      const value = res.data;
      dispatch(changeList(value.data));
    }).catch(() => {
      console.log('error');
    })
  }
};
const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10), // 当获取到数据之后，每10条分成一页，看有多少页
});