import React,{Component} from "react";
import {connect} from "react-redux";
import { getGoodsListAction } from "../../action/actionCreactor";
import Loading from "../common/loading";
class GoodsList extends Component {
  render(){
    let {goodsList} = this.props;
    return (
      <div className="goodsList">
        <div className="goods_content">
          {
            goodsList.map((item,index)=>{
              return <div className="goods_itme" key={index}>
                <div className="item_l">
                  <img src={item.pic}/>
                </div>
                <div className="item_r">
                  <p>{item.d_title}</p>
                </div>
              </div>
            })
                
          }
          <Loading/>
        </div>
      </div>
    )
  }
  componentDidMount(){
    this.props.getHomeGoodsList();
  }
}

const mapStateToProps = (state)=>({
  goodsList:state.homeReducer.goodsList
})

const mapDisPatchToProps=(dispatch)=>({
  getHomeGoodsList(){
    getGoodsListAction(dispatch)
  }
})

export default connect(mapStateToProps,mapDisPatchToProps)(GoodsList)