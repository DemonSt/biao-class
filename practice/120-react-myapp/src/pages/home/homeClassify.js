import React,{Component} from "react";
import {connect} from "react-redux";

class HomeClassify extends Component{
    render(){
        let {homeClassify} = this.props;
        return (
            <ul className="homeClassify">
                {
                    homeClassify.map((item,index)=>{
                        return <li key={index}>
                            <img src={item.img}/>
                            <span>{item.title}</span>
                        </li>
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = (state)=>({
    homeClassify:state.homeReducer.classify
})
export default connect(mapStateToProps)(HomeClassify)