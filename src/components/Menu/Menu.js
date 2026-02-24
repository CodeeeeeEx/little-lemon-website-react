import React from 'react';
import './Menu.css';

function Menu() {
  return (
    <section className="menu" id="menu">
      <h2 className="menu-title">我们的菜单</h2>
      <div className="menu-grid">
        
        {/* 菜品1 */}
        <div className="menu-item">
          <div className="item-image"></div> {/* 图片占位，你可以换成 <img> */}
          <h3>希腊沙拉</h3>
          <p className="price">¥38</p>
          <p className="description">新鲜蔬菜配橄榄油和菲达奶酪</p>
        </div>

        {/* 菜品2 */}
        <div className="menu-item">
          <div className="item-image"></div>
          <h3>柠檬烤鸡</h3>
          <p className="price">¥52</p>
          <p className="description">香嫩烤鸡配特制柠檬酱汁</p>
        </div>

        {/* 菜品3 */}
        <div className="menu-item">
          <div className="item-image"></div>
          <h3>海鲜意面</h3>
          <p className="price">¥45</p>
          <p className="description">鲜虾、蛤蜊与番茄酱汁的完美结合</p>
        </div>

        {/* 菜品4 */}
        <div className="menu-item">
          <div className="item-image"></div>
          <h3>提拉米苏</h3>
          <p className="price">¥28</p>
          <p className="description">经典意大利甜点，入口即化</p>
        </div>

      </div>
    </section>
  );
}

export default Menu;