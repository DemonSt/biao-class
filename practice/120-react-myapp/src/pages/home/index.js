import React, { Component, Fragment } from 'react';
import BScroll from 'better-scroll';
import './css/index.css';
import Header from './header';
import Navbar from './navbar';
import Banner from './banner';
import HomeClassify from './homeClassify';
import HomeAnt from './home_ant';
import GoodsList from './goodList';
import {getGoodsListMoreAction} from "../../action/actionCreactor";
import {connect} from "react-redux";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Navbar />
        <div className="wrapper home">
          <div className="content">
            <Banner />
            <HomeClassify />
            <HomeAnt />
            <GoodsList />
          </div>
        </div>
      </Fragment>
    )
  }

  componentDidMount () {
    this.scroll = new BScroll (".home",{
      pullUpLoad:true,
      click:true
    });
    this.scroll.on("pullingUp",()=>{ 
      this.props.getHomeMore(this.props.page);
    });
  }

  componentDidUpdate () {
    this.scroll.refresh();
    this.scroll.finishPullUp()
  }
};

const mapStateToProps = (state)=>({
  page:state.homeReducer.page
});

const mapDispatchToProps = (dispatch)=>({
  getHomeMore(page){
    getGoodsListMoreAction(dispatch,page)
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(Home)
