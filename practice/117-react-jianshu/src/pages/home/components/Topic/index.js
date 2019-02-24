import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem, TopicMore } from '../../style';

class Topic extends PureComponent {
  render () {
    return (
      <TopicWrapper>
        {
          this.props.topicList.map((item) => {
            return (
              <TopicItem key={item.get("id")}>
                <img className="topic-pic" src={item.get("imgUrl")} alt=""/>
                {item.get("title")}
              </TopicItem>
            )
          })
        }
        <TopicMore>更多热门专题</TopicMore>
      </TopicWrapper>
    )
  }
};

const mapStateToProps = (state) => ({
  topicList: state.getIn(["home", "topicList"])
})

// const mapDispatchToProps = (dispatch) => {}

export default connect(mapStateToProps, null)(Topic);