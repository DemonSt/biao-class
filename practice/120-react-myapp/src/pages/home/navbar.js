import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHomeNav } from '../../action/actionCreactor';
import BScroll from 'better-scroll';

class Navbar extends Component {
  constructor(){
    super();
    this.state = {
      flag:false
    }
  }
  render() {
    let {flag} = this.state;
    let { navs } = this.props;
    return (
      <div className="nav wrapper" ref="nav">
        <ul className="content nav_content" ref="nav_content">
          {
            navs.map((item, index) => {
              return <li key={index}>{item.name}</li>
            })
          }
        </ul>
        <div className="whole" onClick={this.handleToggle.bind(this)}>
          <i className={flag?"iconfont icon_transfrom":"iconfont icon_transfrom_deactive"} >&#xe695;</i>
        </div>
      </div>
    )
  }
  handleToggle(){
    this.setState({
      flag:!this.state.flag
    })
  }
  componentDidMount () {
    this.props.getHomeData();
    // 轮播导航配置  以下12行代码 先引入BScroll 拿到ref 
    this.scroll = new BScroll(this.refs.nav, {
      scrollX: true,
      click: true
    })
  }
  componentDidUpdate() {
    let width = 0;
    for(var i = 0; i < this.refs.nav_content.children.length; i++ ){
      width += this.refs.nav_content.children[i].offsetWidth;
    }
    this.refs.nav_content.style.width = width + "px";
  }
};

const mapStateToProps = (state) => ({
  navs: state.homeReducer.navs,
});

const mapDispatchToProps = (dispatch) => ({
  // 页面挂载之后调用getHomeData执行里面getHomeNav函数同时将dispatch传递给出去
  getHomeData() {
    getHomeNav(dispatch);
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);