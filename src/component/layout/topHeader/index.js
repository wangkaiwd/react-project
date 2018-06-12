import React, { Component } from 'react';
import { Link } from 'react-router'
import { Input, Icon } from 'antd'
import "./index.less"
// 左侧导航配置
const navList = [
  { name: '首页', link: '/index' },
  { name: '未读消息', link: '/unread' },
  { name: '新手入门', link: '/unread' },
  { name: 'API', link: '/unread' },
  { name: '关于', link: '/unread' },
  { name: '设置', link: '/unread' },
  { name: '退出', link: '/unread' },
]
class TopHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="top-header">
        <div className="top-inner">
          <div className="search-box">
            <h2 className="logo">
              <img className="logo-pic" src="//o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="" />
            </h2>
            <div className="search">
              <Input className="search-inp" />
              <Icon className="search-icon" type="search" />
            </div>
          </div>
          <ul className="nav-list">
            {
              navList.map((item, i) => (
                <Link key={i}><li>{item.name}</li></Link>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default TopHeader;
