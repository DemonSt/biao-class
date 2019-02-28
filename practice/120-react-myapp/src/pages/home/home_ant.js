import React,{Component} from "react";
import {connect} from "react-redux";
import {getHomeAnt} from "../../action/actionCreactor";
class Home_Ant extends Component {
  render(){
    let {home_ant} = this.props;
    return(
      <ul className="home_ant">
        {
          home_ant.map((item,index)=>{
            return <li key={index}>
              <img src={item.image}/>
            </li>
          })
        }
      </ul>
    )
  }
  componentDidMount(){
    this.props.getHomeant();
  }
}

const mapStateToProps = (state)=>({
  home_ant:state.homeReducer.home_ant
})

const mapDispatchToProps = (dispatch) => ({
  getHomeant(){
    getHomeAnt(dispatch)
  }
})  

export default connect(mapStateToProps,mapDispatchToProps)(Home_Ant)