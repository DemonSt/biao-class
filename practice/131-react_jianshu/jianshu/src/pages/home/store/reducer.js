import { fromJS } from 'immutable';
import * as constants from './constants';


const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false
});

const changehomedata = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
    });
};
const addhomelist = (state, action) => {
    return state.merge({
        'articleList': state.get('articleList').concat(action.list),
        'articlePage': action.nextPage
    });
};
const togglescrollshow = (state, action) => {
    return state.set('showScroll', action.show);
};

export default (state = defaultState, action) => {
    switch(action.type) {
        case  constants.CHANGE_HOME_DATA:
            return changehomedata(state, action);
        case  constants.ADD_HOME_LIST:
            return addhomelist(state, action);
        case  constants.TOGGLE_SCROLL_SHOW:
            return togglescrollshow(state, action);
        default:
            return state;
    }  
}