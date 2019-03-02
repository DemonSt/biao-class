import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App.js';
import Home from './pages/home';
import Login from './pages/login/index.js';
import Admin from './admin.js';
import Buttons from './pages/ui/buttons.js';
import Carousel from './pages/ui/carousel.js';
import Gallery from './pages/ui/gallery.js';
import Loadings from './pages/ui/loadings.js';
import Messages from './pages/ui/messages.js';
import Modals from './pages/ui/modals.js';
import Notice from './pages/ui/notice.js';
import Tabs from './pages/ui/tabs.js';
import NoMatch from './pages/nomatch/index';

class IRouter extends Component {
  render () {
    return (
      // 使用哈希路由 app作为包裹 里面平级路由关系 
      <HashRouter>
        <App>
          <Route path="/login" component={Login} />
          <Route path="/admin" render={() => 
            <Admin>
              <Switch>
                <Route path="/admin/home" component={Home} />
                <Route path="/admin/ui/buttons" component={Buttons} />
                <Route path="/admin/ui/carousel" component={Carousel} />
                <Route path="/admin/ui/gallery" component={Gallery} />
                <Route path="/admin/ui/loadings" component={Loadings} />
                <Route path="/admin/ui/messages" component={Messages} />
                <Route path="/admin/ui/modals" component={Modals} />
                <Route path="/admin/ui/notification" component={Notice} />
                <Route path="/admin/ui/tabs" component={Tabs} />
                <Route component={NoMatch} />  
              </Switch>  
            </Admin> 
          } />
        </App>
      </HashRouter>
    )
  }
};

export default IRouter;