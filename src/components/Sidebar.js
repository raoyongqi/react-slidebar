import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to="/">首页</Link>
            <Link to="/page1">上传训练集</Link>
            <Link to="/page2">训练集数据分析</Link>
            <Link to="/page3">上传预测集</Link>
            <Link to="/page4">预测集分析</Link>
            <Link to="/page5">修改模型</Link>
            {/* 添加更多链接 */}
        </div>
    );
};

export default Sidebar;
