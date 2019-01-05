import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Write extends PureComponent {
    render() {
        const { loginStatus } = this.props;
        if(loginStatus) {
            return(
                <div>你登录了，你是付费用户，你可以为所欲为</div>
            )
        }else {
            return <Redirect to='/login' />
        }
    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
});

export default connect(mapState, null)(Write);