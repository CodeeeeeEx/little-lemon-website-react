import React from 'react';
import './Menu.css';
// 引入图片（注意路径）
import salad from '../../images/沙拉.jpg';
import lemonChicken from '../../images/柠檬鸡.jpg';
import pasta from '../../images/意大利面.jpg';
import tiramisu from '../../images/提拉米苏.jpg';
import fish from '../../images/香煎三文鱼.jpg';
import bread from '../../images/蒜香面包.jpg';


function Menu() {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <h2 className="menu-title">我们的菜单</h2>
        <div className="menu-grid">
          
          {/* 菜品1 */}
          <a href="#" 
          className="menu-link"
          onClick={(event) => { event.preventDefault(); console.log('点击了卡片，不会自动弹到顶部了'); }} /* 阻止默认行为防止总是跳转至首页开头 */
          >
            <div className="menu-item">
              <div className="item-image">
                <img src={salad} alt="希腊沙拉" />
              </div> 
              <h3>希腊沙拉</h3>
              <p className="price">¥38</p>
              <p className="description">新鲜蔬菜配橄榄油和菲达奶酪</p>
            </div>
          </a>

          {/* 菜品2 */}
          <a href="#" 
          className="menu-link"
          onClick={(event) => { event.preventDefault(); console.log('点击了卡片，不会自动弹到顶部了'); }} /* 阻止默认行为防止总是跳转至首页开头 */
          >
            <div className="menu-item">
              <div className="item-image">
                <img src={lemonChicken} alt="柠檬鸡" />
              </div>
              <h3>柠檬鸡</h3>
              <p className="price">¥52</p>
              <p className="description">香嫩烤鸡配特制柠檬酱汁</p>
            </div>
          </a>

          {/* 菜品3 */}
          <a href="#" 
          className="menu-link"
          onClick={(event) => { event.preventDefault(); console.log('点击了卡片，不会自动弹到顶部了'); }} /* 阻止默认行为防止总是跳转至首页开头 */
          >
            <div className="menu-item">
              <div className="item-image">
                <img src={pasta} alt="海鲜意面" />
              </div>
              <h3>海鲜意面</h3>
              <p className="price">¥45</p>
              <p className="description">鲜虾、蛤蜊与番茄酱汁的完美结合</p>
            </div>
          </a>

          {/* 菜品4 */}
          <a href="#" 
          className="menu-link"
          onClick={(event) => { event.preventDefault(); console.log('点击了卡片，不会自动弹到顶部了'); }} /* 阻止默认行为防止总是跳转至首页开头 */
          >
            <div className="menu-item">
              <div className="item-image">
                <img src={tiramisu} alt="提拉米苏" />
              </div>
              <h3>提拉米苏</h3>
              <p className="price">¥28</p>
              <p className="description">经典意大利甜点，入口即化</p>
            </div>
          </a>

           {/* 菜品5 */}
          <a href="#" 
          className="menu-link"
          onClick={(event) => { event.preventDefault(); console.log('点击了卡片，不会自动弹到顶部了'); }} /* 阻止默认行为防止总是跳转至首页开头 */
          >
            <div className="menu-item">
              <div className="item-image">
                <img src={fish} alt="鱼" />
              </div>
              <h3>香煎三文鱼</h3>
              <p className="price">¥68</p>
              <p className="description">外焦里嫩，搭配柠檬黄油酱</p>
            </div>
          </a>

            {/* 菜品6 */}
          <a href="#" 
          className="menu-link"
          onClick={(event) => { event.preventDefault(); console.log('点击了卡片，不会自动弹到顶部了'); }} /* 阻止默认行为防止总是跳转至首页开头 */
          >
            <div className="menu-item">
              <div className="item-image">
                <img src={bread} alt="面包" />
              </div>
              <h3>蒜香面包</h3>
              <p className="price">¥12</p>
              <p className="description">酥脆可口，蒜香浓郁</p>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}

export default Menu;