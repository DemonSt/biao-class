import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

export const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
});

export const getInputFocus = () => ({
    type: constants.INPUT_FOCUS,
});
export const getInputBlur = () => ({
    type: constants.INPUT_BLUR,
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
