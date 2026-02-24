import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>小柠檬餐厅</h3>
          <p>提供正宗地中海风味美食</p>
        </div>
        
        <div className="footer-section">
          <h4>营业时间</h4>
          <p>周一至周日</p>
          <p>11:00 - 22:00</p>
        </div>
        
        <div className="footer-section">
          <h4>联系我们</h4>
          <p>📍 浙江省嘉兴市XX路XX号</p>
          <p>📞 138-XXXX-XXXX</p>
          <p>✉️ contact@littlelemon.com</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2026 小柠檬餐厅. 保留所有权利.</p>
      </div>
    </footer>
  );
}

export default Footer;