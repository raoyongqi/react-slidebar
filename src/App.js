import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Content from './components/MainContent';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Sidebar />
                <Content />
            </div>
        </Router>
    );
};

export default App;
