import React from 'react';
import './Hero.css';
// 引入图片（注意路径）
import dishImage from '../../images/dish.jpg';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>欢迎光临小柠檬餐厅</h1>
        <p>正宗地中海美食，新鲜食材，现点现做</p>
        <button className="cta-button">立即预订</button>
      </div>
      <div className="hero-image">
        <img src={dishImage} alt="美味菜肴" />
      </div>
    </section>
  );
}

export default Hero;