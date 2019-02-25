import React, { Component } from 'react'
import { Row, Col } from 'antd';
import axios from '../../axios'
import Utils from '../../utils/utils.js';
import './index.css';

class Header extends Component {
  render () {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span="24">
            <span>欢迎,{this.state.userName}</span>
            <a href="/">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span="4" className="breadcrumb-title">首页</Col>
          <Col span="20" className="weather">
            <span className="date">{this.state.sysTime}</span>
            <span className="weather-img">
              <img src={this.state.dayPictureUrl} alt=""/>
            </span>
            <span className="weather-detail">
              {this.state.weather}
            </span>
          </Col>
        </Row>
      </div>
    );
  }
  componentWillMount() {
    this.setState({
      userName: '玉璞'
    });
    //  new Date().getTime()拿取到系统时间的毫秒数 扔给formateDate方法去转换时间  同时封存在变量sysTime里
    setInterval (() => {
      let sysTime = Utils.formateDate(new Date().getTime());
      this.setState({
        sysTime
      })
    }, 1000);
    this.getWeatherAPIData ();
  }
  // 调用axios里的一个jsonp方法
  getWeatherAPIData () {
    let city = '杭州';
    axios.jsonp({
      url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
    }).then((res)=>{
      if(res.status == 'success'){
        let data = res.results[0].weather_data[0];
        this.setState({
          dayPictureUrl:data.dayPictureUrl,
          weather:data.weather
        })
      }
    })
  }
}

export default Header;