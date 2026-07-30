import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* Brand / Logo */}
        <div className="footer-brand">
          <h2 className="footer-logo">
            LAB08<span className="highlight">THUCHANH</span>
          </h2>
          <p className="footer-tagline">
            Làm bài tập thực hành lấy điểm sống qua ngày.
          </p>
        </div>

        {/* Navigation */}
        <nav className="footer-nav">
          <a href="#home">Trang chủ</a>
          <a href="#movies">About</a>
          <a href="#genres">Dịch vụ</a>
          <a href="#about">Liên hệ</a>
        </nav>

        {/* Bản quyền */}
        <div className="footer-copyright">
          © 2026 <strong>Lab08TH</strong>. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;