import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>兴业银行</h2>
                <p>自营投资专业管理类系统</p>
            </div>
            <ul className="sidebar-menu">
                <li><a href="#">额度申请</a></li>
                <li><a href="#">通知书管理</a></li>
                <li><a href="#">基金交易管理</a></li>
                <li><a href="#">存续期管理</a></li>
                <li><a href="#">额度管理</a></li>
                <li><a href="#">基金信息维护</a></li>
                <li><a href="#">合同管理</a></li>
                <li><a href="#">迁移管理</a></li>
                <li><a href="#">外部数据查询</a></li>
                <li><a href="#">系统管理</a></li>
                <li><a href="#">工作流</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;
