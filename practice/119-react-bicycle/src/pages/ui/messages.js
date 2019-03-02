import React, { Component } from 'react'
import { Card, Button, message } from 'antd'
import './ui.css'
export default class Buttons extends Component {
    // message[type](提示信息， 多少秒消失， 回调函数)
    showMessage = (type)=>{
        message[type]("恭喜你，React课程晋级成功");
    }

    render(){
        return (
            <div>
                <Card title="全局提示框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.showMessage('success')}>Success</Button>
                    <Button type="primary" onClick={()=>this.showMessage('info')}>Info</Button>
                    <Button type="primary" onClick={()=>this.showMessage('warning')}>Warning</Button>
                    <Button type="primary" onClick={()=>this.showMessage('error')}>Error</Button>
                    <Button type="primary" onClick={()=>this.showMessage('loading')}>Loading</Button>
                </Card>
            </div>
        );
    }
}