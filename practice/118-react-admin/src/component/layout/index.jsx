import React, { Component } from 'react';
import NavTop from './nav-top/index.jsx';
import NavSide from './nav-side/index.jsx';
import './theme.css';

class Layout extends Component {
  constructor (props) {
    super (props)
  }
  render () {
    return (
      <div id="wrapper">
        <NavTop />
        <NavSide />
        {this.props.children}
      </div>
    )
  }
}

export default Layout;