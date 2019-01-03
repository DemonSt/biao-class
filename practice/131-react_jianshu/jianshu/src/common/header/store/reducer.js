
//   header组件 相关页面展示的内容和数据 都存放于此

import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    list: [],
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.INPUT_FOCUS :
            return state.set('focused', true);
        case constants.INPUT_BLUR :
            return state.set('focused', false);
        case constants.CHANGE_LIST :
            return state.set('list', action.data);
        default:
            return state;
    }
    
}