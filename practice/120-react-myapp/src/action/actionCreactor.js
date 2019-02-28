import { fetch } from 'whatwg-fetch';
import fetchJsonp from "fetch-jsonp";
import actionTypes from './actionTypes';

// 导航请求    fetch里面的链接只是一半
export const getHomeNav = (dispatch) => {
  dispatch({
    type: actionTypes.getHomeNav,
    payload: new Promise(resolve => {
      fetch("/index.php?r=class/type")
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      })
    })
  })
}
//  http://www.shenduzhekou.com/index.php?r=realtime/waplist&callback=jQuery19108746110397263749_1543569929653&_=1543569929654
export const getHomeAnt = (dispatch)=>{
  dispatch({
    type:"GET_HOME_ANT",
    payload:new Promise(resolve=>{
      fetchJsonp("http://www.shenduzhekou.com/index.php?r=realtime/waplist&_=1543569929654")
      .then(res=>res.json())
      .then((data)=>{
        resolve(data)
      })  
    })
  })
}

export const getGoodsListAction = (dispatch)=>{
  dispatch({
    type:"GOODSLIST",
    payload:new Promise(resolve=>{
      fetch("/index.php?r=index/ajaxnew&page=1")
      .then((res)=>res.json())
      .then((data)=>{
        resolve(data.data.data);
      })
    })
  })
}
//http://www.shenduzhekou.com
export const getGoodsListMoreAction = (dispatch,page)=>{
  dispatch({
    type:"GOODSLIST_MORE",
    payload:new Promise(resolve=>{
      let moreUrl = "/index.php?r=index/ajaxnew&page="+page+"&cac_id=cXVlcnlUaGVuRmV0Y2g7Njs3MDg2MzkyNTY2OjNwbnV0OGs4VHRxLVZWSHFPamVMM3c7NzA4NjQ2MjEyODo0dG9PT2VMSVJTR2k3MjZnbnBaT3pBOzU5OTUwNzM1MTY6QlZFVWVUVEtTMXVoZVhRbnZGSG9CQTs1OTk0NzUyMjIyOkpObHNRYjlJUnBxVWoyRXpjNFd3aEE7NzA4NjM5MjU2MzozcG51dDhrOFR0cS1WVkhxT2plTDN3OzcwODY0NjIxMjc6NHRvT09lTElSU0dpNzI2Z25wWk96QTswOw%3D%3D"
      fetch(moreUrl)
      .then((res)=>res.json())
      .then((data)=>{
        resolve(data.data.data);
      })
    })
  })
}
