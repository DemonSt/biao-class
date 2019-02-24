import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ListItem, ListInfo, LoadMore } from '../../style';
import { actionCreators } from '../../store';

class List extends PureComponent {
  render () {
    const { articleList, articlePage, getMoreList } = this.props; 
    return (
      <div>
        {
          articleList.map((item) => {
            return (
              // 当点击每一条信息跳转到详情页面时，需要给每一个页面不同的id值来区分，这个id值就是后端给的用来循环的key值和id值 同时需要绑定动态路由
              <Link  key={item.get("id")} to={'/detail/' + item.get('id')}>   
                <ListItem>
                  <img className="list-pic" src={item.get("imgUrl")} alt=""/>
                  <ListInfo>
                    <h3 className="title">{item.get("title")}</h3>
                    <p className="desc">{item.get("desc")}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            );
          })
        }
        <LoadMore onClick={() => getMoreList (articlePage)}>更多文字</LoadMore>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  articleList: state.getIn(['home', 'articleList']),
  articlePage: state.getIn(['home', 'articlePage'])
});

const mapDispatchToProps = (dispatch) => ({
  getMoreList (articlePage) {
    dispatch(actionCreators.getMoreList(articlePage));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(List);