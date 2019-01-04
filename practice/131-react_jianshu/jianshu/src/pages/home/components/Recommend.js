import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    RecommendWrapper,
    RecommendItem, 
} from '../style';

class Recommend extends Component {
    render() {
        return(
            this.props.list.map((item) => (
                <RecommendWrapper key={item.get('id')}>
                    <RecommendItem imgUrl={item.get('imgUrl')} />
                </RecommendWrapper>
            ))
        )
    }
}

const mapState =  (state) => ({
    list: state.getIn(['home','recommendList'])
});

export default connect(mapState, null)(Recommend);