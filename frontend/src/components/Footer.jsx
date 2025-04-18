import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>AIChinatrip</h3>
            <p>Your AI-powered guide to discovering the beauty and culture of China.</p>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Destinations</a></li>
              <li><a href="#">How It Works</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Popular Destinations</h3>
            <ul className="footer-links">
              <li><a href="#">Beijing</a></li>
              <li><a href="#">Shanghai</a></li>
              <li><a href="#">Xi'an</a></li>
              <li><a href="#">Chengdu</a></li>
              <li><a href="#">Guilin</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul className="footer-links">
              <li><a href="mailto:info@aichinatrip.com">info@aichinatrip.com</a></li>
              <li><a href="tel:+1234567890">+123 456 7890</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 AIChinatrip. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;