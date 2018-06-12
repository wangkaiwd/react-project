import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
// 必须以绝对路径来引入less,"./"也不能省略
import "./style/index.less";
class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
    const { pathname } = this.props.location;
    this.title = [
      { name: '全部', link: `${pathname}/all` },
      { name: '精华', link: `${pathname}/good` },
      { name: '分享', link: `${pathname}/share` },
      { name: '问答', link: `${pathname}/qs` },
      { name: '招聘', link: `${pathname}/recruitment` },
      { name: '客户端测试', link: `${pathname}/test` },
    ]
  }
  handleClick = (i, item) => {
    this.setState({ activeIndex: i });
    hashHistory.push(item.link);
  }
  render() {
    const { activeIndex } = this.state;
    return (
      <div className="category">
        <div className="title">
          <ul className="category-title-list clearfix">
            {this.title.map((item, i) => (
              <Link key={i}>
                <li
                  className={activeIndex === i ? 'active' : ''}
                  onClick={() => this.handleClick(i, item)}
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="category-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
export default Category;
