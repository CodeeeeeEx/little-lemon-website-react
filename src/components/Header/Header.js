import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <h2>🍋 Little Lemon</h2>
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