import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import Header from './common/header';
import { GlobalStyle } from './style.js';
import store from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <GlobalStyle />
          <Header />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
