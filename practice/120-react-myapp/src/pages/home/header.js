import React,{ Component } from "react";

class Header extends Component{
  render(){
    return(
      <div id="header">
        <input type="text" placeholder="输入您需要的商品名称"/>
        <div>App</div>
      </div>
    )
  }
};

export default Header;