import React, { Component } from "react";
import { connect } from "react-redux";
import "../../../node_modules/swiper/dist/css/swiper.css";
import Swiper from "swiper";

class Banner extends Component {
  render() {
    let {banner} = this.props;
    return (
      <div className="swiper-container banner">
        <div className="swiper-wrapper">
        { 
          banner.map((item,index)=>{
            return  <div className="swiper-slide" key={index}>
              <img src={item}/>
            </div>
          })
        }  
        </div>
        <div className="swiper-pagination"></div>
      </div>
    )
  }
  componentDidMount(){
    new Swiper(".banner",{
      loop:true,
      autoplay:{
        disableOnInteraction:false
      },
    })
  }
}


const mapStateToProps = (state) => ({
  banner: state.homeReducer.banner
})
export default connect(mapStateToProps)(Banner)