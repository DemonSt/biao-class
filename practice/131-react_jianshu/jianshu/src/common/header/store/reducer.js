
//   header组件 相关页面展示的内容和数据 都存放于此

import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1,
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.INPUT_FOCUS :
            return state.set('focused', true);
        case constants.INPUT_BLUR :
            return state.set('focused', false);
        case constants.CHANGE_LIST :
            return state.merge({
                list: action.data,
                totalPage: action.totalPage,
            });
        case constants.MOUSE_ENTER :
            return state.set('mouseIn', true);
        case constants.MOUSE_LEAVE :
            return state.set('mouseIn', false);
        case constants.CHANGE_PAGE_LIST :
            return state.set('page', action.page);
        default:
            return state;
    }  
}