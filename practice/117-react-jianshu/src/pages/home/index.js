import React, { PureComponent } from 'react';  // react16新加入的功能， 性能优化 代替component 最好配合immutable否则要遇到坑
import Writer from './components/Writer';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import QRCode from './components/QRCode';
import List from './components/List';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';

class Home extends PureComponent {
  handleScrollTop () {
    window.scroll(0, 0);
  };
  render () {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4611/5645ed8603a55d79042f2f7d8e7cc1d533cc30ac.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <QRCode />
          <Writer />
        </HomeRight>
        {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>上顶</BackTop> : null}
      </HomeWrapper>
    )
  };
  componentDidMount () {       
    this.props.changeHomeData();
    this.bindEvents();
  };
  componentWillUnmount () {
    window.removeEventListener("scroll", this.props.changeScroll)
  };
  bindEvents () {
    window.addEventListener("scroll", this.props.changeScroll)
  };
};



const mapStateToProps = (state) => ({
  showScroll: state.getIn(["home", "showScroll"])
});

const mapDispatchToProps = (dispatch) => ({
  changeHomeData () {
    dispatch(actionCreators.getHomeInfo())
  },
  changeScroll () {
    if(document.documentElement.scrollTop > 320) {
      dispatch(actionCreators.showScroll(true));
    }else {
      dispatch(actionCreators.showScroll(false));
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);