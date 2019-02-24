import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { DetailWrapper, Header, Content } from './style';

class Detail extends Component {
  render () {
    const { title, content } = this.props
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{__html: content}} />      {/*  避免被转义  */}
      </DetailWrapper>
    )
  };
  componentDidMount () {
    // 页面即将被挂载时不仅要发送axios获取数据 同时将一个id值传递给axios让他准确拿到某一页的数据
    this.props.changeDetailData(this.props.match.params.id)
  }
};

const mapStateToProps = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
});

const mapDispatchToProps = (dispatch) => ({
  changeDetailData (id) {
    dispatch(actionCreators.getDetailInfo(id))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);