import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators }  from '../../pages/login/store';
import { 
  HeaderBorder,
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button
} from './style';

class Header extends Component {
  // 获取 搜索框中当前页面展示的异步数据
  getListArea() {
    const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
    const pageList = [];
    const newList = list.toJS();                             // immutable提供的方法，将immutable数组通过toJS转化成普通数组
    if(newList.length) {                                     // 避免key值出现十次undefind，页面初始化时不循环，获取到axios以后再循环
      for(let i = (page - 1) * 10; i < page * 10; i++) {     // 前面已经拆分好每个页面有10个数据，循环拿到每一个数据
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    if(focused || mouseIn) {                                 // 聚焦或者鼠标移入，显示弹窗
      return (
        <SearchInfo 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handleChangePage (page, totalPage, this.spinIcon)}>  {/* 点击更改page页数 */}
              <i ref={(icon) => {this.spinIcon=icon}} className="iconfont spin">&#xe7ea;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    }else {
      return null;
    }
  }

  render() {
    const { focused, list, handleInputFocus, handleInputBlur, login, logout } = this.props
    return(
      <HeaderBorder>
        <HeaderWrapper>
          <Link to='/'>
            <Logo />
          </Link>
          <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载App</NavItem>
            {
              login ? 
              <NavItem onClick={logout} className="right">退出</NavItem> : 
              <Link to='/login'><NavItem className="right">登录</NavItem></Link>
            }
            <NavItem className="right">
              <i className="iconfont">&#xe636;</i>
            </NavItem>
            <SearchWrapper>
              <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
              >
                <NavSearch 
                className={focused ? 'focused' : ''}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
                ></NavSearch>
              </CSSTransition>
              <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe653;</i>
              {this.getListArea()}
            </SearchWrapper>
          </Nav>
          <Addition>
            <Link to='/write'>
              <Button className="writting">
                <i className="iconfont">&#xe615;</i>
                写文章
              </Button>
              <Button className="reg">注册</Button>
            </Link>
          </Addition>
        </HeaderWrapper>
      </HeaderBorder>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage']),
    login: state.getIn(['login', 'login'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.size === 0) && dispatch(actionCreators.getList());   // 避免多次重复发送axios
      dispatch(actionCreators.getInputFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.getInputBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage, spin) {            //  换一批旋转圆圈效果
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if(originAngle) {
        originAngle = parseInt(originAngle, 10)
      }else{
        originAngle = 0;
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
      if(page < totalPage){
        dispatch(actionCreators.changePageList(++page));
      }else{
        dispatch(actionCreators.changePageList(1));
      }
    },
    logout() {
      dispatch(loginActionCreators.logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);