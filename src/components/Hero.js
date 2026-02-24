import React from 'react';
import './Hero.css';
// 引入图片（注意路径）
import heroBackground from '../images/dish.jpg';

function Hero() {
  return (
    <section className="hero" 
    id="home"
    style={{backgroundImage: `url(${heroBackground})`}}
    >
      <div className="hero-content">
        <h1>小柠檬餐厅</h1>
        <p>新鲜地中海美食，就在城市中心</p>
        <button className="cta-button">查看菜单</button>
      </div>
    </section>
  );
}

export default Hero;