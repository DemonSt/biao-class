import React,{Component} from "react";

export default class Loading extends Component{
    render(){
        return(
            <div className="loading">
                <i className="fa fa-spinner fa-pulse"></i>
            </div>
        )
    }
}