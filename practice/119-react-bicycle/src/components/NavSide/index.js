import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import MenuConfig from '../../config/menuConfig.js';
import './index.css';

const SubMenu = Menu.SubMenu;

class NavSide extends Component {
  render () {
    return (
      <div>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt=""/>
          <h1>shou ye</h1>
        </div>
        <Menu theme="light">
          {this.state.menuTreeNode}
        </Menu>
      </div>
    );
  };
  // 页面挂载之前 生成所需要的左侧导航栏数据 并改变state里面数据
  componentWillMount() {
    const menuTreeNode = this.renderMenu (MenuConfig);
    this.setState({
      menuTreeNode
    })
  };
  // 递归 将MenuConfig里面的数据 循环渲染出来  菜单渲染
  renderMenu (data) {
    return data.map ((item) => {
      if(item.children) {
        return <SubMenu title={item.title} key={item.key}>
          {this.renderMenu (item.children)}
        </SubMenu>
      }
      return <Menu.Item title={item.title} key={item.key}>
        <NavLink to={item.key}>{item.title}</NavLink> 
      </Menu.Item>
      
    });
  }
}

export default NavSide;