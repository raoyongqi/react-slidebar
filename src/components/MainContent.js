import React from 'react';
import './MainContent.css';

const MainContent = () => {
    return (
        <div className="main-content">
            <div className="header">
                <h1>首页</h1>
            </div>
            <div className="content">
                <div className="task-list">
                    <h3>待办</h3>
                    <ul>
                        <li>关于AZAPzsAE的大策略额度新增申请</li>
                        <li>关于AZAPzb45的大策略额度新增申请</li>
                        <li>关于AZAGidMR的大策略额度新增申请</li>
                        <li>关于自动化测试大策略类型001的大策略额度新增申请</li>
                        <li>关于测试专用货基的基金申购申请</li>
                    </ul>
                </div>
                <div className="reminders">
                    <h3>到期提醒</h3>
                    <ul>
                        <li>现金管理类理财产品</li>
                        <li>王源市包装集团</li>
                        <li>成熟产品型</li>
                        <li>子策略</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
