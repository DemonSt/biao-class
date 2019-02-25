import React, { Component } from 'react'
import { Row, Col } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import NavSide from './components/NavSide';
import Home from './pages/home';
import './style/common.css';

class Admin extends Component {
  render () {
    return (
      <Row className="container">
        <Col span="4" className="nav-left">
          <NavSide />
        </Col>
        <Col span="20" className="main">
          <Header />
          <Row className="content">
            <Home></Home>
          </Row>
          <Footer></Footer>
        </Col>
      </Row>
    );
  }
}

export default Admin;