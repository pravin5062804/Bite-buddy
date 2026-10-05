import React from 'react';


const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Brand Section */}
        <div className="footer-brand">
          <div className="logo">
            <img 
              src="./src/assests/logo.png" 
              alt="BiteBuddy logo - a cartoonish burger with smiling face and chef hat" 
            />
            <h2>Bite<span>Buddy</span></h2>
          </div>
          <p className="brand-text">
            Your favorite meals delivered fast to your doorstep. Quality food, quick service, happy customers.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/how-it-works">How It Works</a></li>
            <li><a href="/faqs">FAQs</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <p>123 Food Street, Culinary City</p>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <p>+1 234 567 890</p>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <p>hello@bitebuddy.com</p>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter for the latest deals</p>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="newsletter-input" 
              required 
            />
            <button type="submit" className="newsletter-btn">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="#" className="social-icon" aria-label="Facebook">
            <img 
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/46ca951e-509e-4a3a-b1dc-1efffc937186.png" 
              alt="Facebook icon" 
            />
          </a>
          <a href="#" className="social-icon" aria-label="Twitter">
            <img 
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bc46e2dd-3406-48d5-b551-c5e4eb8fab49.png" 
              alt="Twitter icon" 
            />
          </a>
          <a href="#" className="social-icon" aria-label="Instagram">
            <img 
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9fcb6e3c-6acb-498f-a116-af584914a06f.png" 
              alt="Instagram icon" 
            />
          </a>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} BiteBuddy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
