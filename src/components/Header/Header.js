import React from 'react';
import './Header.css';
import lemonLogo from '../../images/柠檬.jpg';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <img src={lemonLogo} alt="小柠檬Logo" className="logo-img" />
            <h2 className="logo-text">小柠檬</h2>
          </div>
          <ul className="nav-links">
            <li><a href="#home">首页</a></li>
            <li><a href="#menu">菜单</a></li>
            <li><a href="#about">关于我们</a></li>
            <li><a href="#contact">联系我们</a></li>
          </ul>
        </nav>
    </header>
  );
}

export default Header;