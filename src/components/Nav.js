import React, { Component } from 'react'
import { Menu } from 'antd'
import { useHistory } from 'react-router-dom'
import 'antd/dist/reset.css'
import './style.css' // 引入自定义样式文件 
const Nav = () => {
  const history = useHistory()
  const handleMenuClick = (e) => {
    if (e.key === 'home') {
      history.push("/")
    } else if (e.key === 'studyCountry') {
      window.open('https://www.xuexi.cn/5c90534c80d14c060d6683fa960e3676/82573c005c024095037d2186a02244cb.html')
    } else if (e.key === 'partyBuild') {
      window.open('http://www.maxwal.cn/index_dj.html')
    } else if (e.key === 'onlionStudy') {
      history.push("/online-learning")
    } else if (e.key === 'about') {
      window.open('http://news.cnr.cn/mryxh/') // 替换为你想要跳转的外部网页的URL
    }
  }
  return (
    <div>
      <Menu mode="horizontal" onClick={handleMenuClick} className="custom-menu">
        <Menu.Item key="home" >首页</Menu.Item>
        <Menu.Item key="studyCountry">学习强国</Menu.Item>
        <Menu.Item key="partyBuild">党建网</Menu.Item>
        <Menu.Item key="onlionStudy">在线学习</Menu.Item>
        <Menu.Item key="about">关于</Menu.Item>
        {/* 其他菜单项 */}
      </Menu>
    </div>
  )
}

export default Nav