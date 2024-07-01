import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <NavLink exact to="/" activeClassName="active">首页</NavLink>
            <NavLink to="/page1" activeClassName="active">上传训练集</NavLink>
            <NavLink to="/page2" activeClassName="active">训练集数据分析</NavLink>
            <NavLink to="/page3" activeClassName="active">上传预测集</NavLink>
            <NavLink to="/page4" activeClassName="active">预测集分析</NavLink>
            <NavLink to="/page5" activeClassName="active">修改模型</NavLink>
        </div>
    );
};

export default Sidebar;
