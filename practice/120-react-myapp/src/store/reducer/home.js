import actionTypes from '../../action/actionTypes';


const defaultState = {
  navs: [],
  banner: [
    "https://img.alicdn.com/imgextra/i3/2508158775/TB2avNeB21TBuNjy0FjXXajyXXa_!!2508158775.jpg",
    "https://img.alicdn.com/imgextra/i1/2508158775/O1CN012EgzwkcFl96X1u7_!!2508158775.jpg",
    "https://img.alicdn.com/imgextra/i1/2508158775/O1CN01FaPxQf2EgzxSTiH9g_!!2508158775.jpg"

  ],
  classify: [{
      img: "https://img.alicdn.com/imgextra/i1/2053469401/TB2G1wjoBnTBKNjSZPfXXbf1XXa-2053469401.png",
      title: "疯抢排行"
    },
    {
      img: "https://img.alicdn.com/imgextra/i3/2053469401/TB2do7GoVooBKNjSZFPXXXa2XXa-2053469401.png",
      title: "咚咚抢"
    },
    {
      img: "https://img.alicdn.com/imgextra/i3/2053469401/TB2do7GoVooBKNjSZFPXXXa2XXa-2053469401.png",
      title: "每日半价"
    },
    {
      img: "https://img.alicdn.com/imgextra/i1/2053469401/TB2qYeWoRjTBKNjSZFuXXb0HFXa-2053469401.png",
      title: "折上折"
    },
    {
      img: "https://img.alicdn.com/imgextra/i1/2053469401/O1CN012JJhsPlAS4fsv7s-2053469401.png",
      title: "聚拼团"
    }
  ],
  home_ant: [],
  goodsList: [],
  page: 2
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.getHomeNav + '_FULFILLED':
      let getHomeState = JSON.parse(JSON.stringify(state));  //这两种深拷贝方法都可以
      getHomeState.navs = action.payload.data;
      return getHomeState;
    case "GET_HOME_ANT_FULFILLED":
      let home_antState = JSON.parse(JSON.stringify(state));;
      home_antState.home_ant = action.payload;
      return home_antState;
    case "GOODSLIST_FULFILLED":
      let homeGoodsList  = {...state};
      homeGoodsList.goodsList = action.payload;
      return homeGoodsList;
    case "GOODSLIST_MORE_FULFILLED":
      let homeGoodsListMore  = {...state};
      homeGoodsListMore.goodsList = [...homeGoodsListMore.goodsList,...action.payload];
      homeGoodsListMore.page++;
      return homeGoodsListMore;
    default:
      return state;
  }
}