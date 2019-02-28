import React, { Component } from 'react';
import { HashRouter, NavLink, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages/home';
import My from './pages/my';
import Free from './pages/free';
import ClassFiy from './pages/classfiy';
import Collection from './pages/collection';
import store from './store';
import './common/css/reset.css';
import './common/js/flexble.js';
import './common/css/footer.css';
import './common/css/iconfont/iconfont.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="box">
            <Switch>
              <Route path='/home' component={Home} />
              <Route path='/my' component={My} />
              <Route path='/free' component={Free} />
              <Route path='/classfiy' component={ClassFiy} />
              <Route path='/collection' component={Collection} />
              <Redirect path='/' to='/home' />
            </Switch>
            <div id="footer">
              <ul>
                <li>
                  <NavLink to="/home">
                    <i className="iconfont">&#xe663;</i>
                    <span>首页</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/free">
                    <i className="iconfont">&#xe600;</i>
                    <span>包邮</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/classfiy">
                    <i className="iconfont">&#xe7f9;</i>
                    <span>分类</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/collection">
                    <i className="iconfont">&#xe702;</i>
                    <span>收藏</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/my">
                    <i className="iconfont">&#xe646;</i>
                    <span>我的</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
