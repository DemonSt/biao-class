import { fromJS, merge } from 'immutable';
import  * as constants  from './constants';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.GET_HOME_INFO:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      });
    case constants.ADD_HOME_LIST:
      return state.merge({
        articleList: state.get('articleList').concat(action.list),
        articlePage: action.nextPage                // 请求加载更多list分页操作
      });
    case constants.SHOW_SCROLL_TOP:
      return state.set('showScroll', action.show);
    default:
      return state;
  }
}