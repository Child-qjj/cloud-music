import React, { memo } from 'react'
//import {NavLink} from 'react-router-dom'

//常量
import {headerLinks} from '@/common/local-data'

//自定义组件相关
import {  
    HeaderWrapper,
    HeaderLeft,
    HeaderRight
} from "./style";
import { NavLink } from 'react-router-dom';
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";

export default memo(function QJAppheader() {

    //页面代码
    const   showSelectItem = (item,index)=>{
                if (index<3) {
                return (
                    <NavLink to={item.link}>
                        {item.title}
                        <i className="sprite_01 icon"></i>
                    </NavLink>
                )
                } else {
                    return <a href={item.link}>{item.title}</a>
                }
            }

    //返回jsx
    return (
        <HeaderWrapper>
            {/* <NavLink to="/">发现音乐</NavLink>
            <NavLink to="/mine">我的音乐</NavLink>
            <NavLink to="friend">朋友</NavLink> */}
            <div className="content wrap-v1">
                <HeaderLeft>
                    <a href="#/" className="logo sprite_01">网易云音乐</a>
                    <div className="select-list">
                        {
                            headerLinks.map((item,index)=>{
                                return(
                                    <div key={item.title} className="select-item">
                                        {showSelectItem(item,index)}
                                    </div>
                                )
                            })
                        }
                    </div>
                </HeaderLeft>
                <HeaderRight>
                    <Input className="search" placeholder="音乐/视频/电台/用户"  prefix={<SearchOutlined />}/>
                    <a href="https://music.163.com/login?targetUrl=%2Fst/creator" className="center">创作者中心</a>
                    <div className="login">
                        <a href="#/" className="link">登录</a>
                    </div>
                </HeaderRight>
            </div>
            <div className="divider"></div>
        </HeaderWrapper>
    )
})
