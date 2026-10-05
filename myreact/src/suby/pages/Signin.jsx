import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';


export default function SignInPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isSignUp ? 'Sign Up Data:' : 'Sign In Data:', formData);
  };

  return (
    <div className="signin-container">
      {/* Animated background elements */}
      <div className="background-overlay">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      <div className="glass-card">
        <div className="header-section">
          <h1 className="logo-text">🍽️ BiteBuddy</h1>
          <p className="subtitle">
            {isSignUp ? 'Create your account to start your culinary journey' : 'Welcome back! Sign in to continue your food adventure'}
          </p>
        </div>

        <div className="form-container">
          {isSignUp && (
            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                className="input-field"
                required={isSignUp}
              />
              <User size={20} className="input-icon" />
            </div>
          )}

          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="input-field"
              required
            />
            <Mail size={20} className="input-icon" />
          </div>

          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="input-field"
              required
            />
            <div
              className="input-icon clickable"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </div>
          </div>

          {isSignUp && (
            <div className="input-group">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="input-field"
                required={isSignUp}
              />
              <div
                className="input-icon clickable"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </div>
            </div>
          )}

          {!isSignUp && (
            <div className="forgot-password">
              <a href="#" className="toggle-link">
                Forgot Password?
              </a>
            </div>
          )}

          <button type="button" onClick={handleSubmit} className="submit-btn">
            {isSignUp ? 'Create Account' : 'Sign In'}
          </button>
        </div>

        <div className="switch-section">
          <p className="switch-text">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
            <span
              onClick={() => setIsSignUp(!isSignUp)}
              className="toggle-link ml-2"
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </span>
          </p>
        </div>

        <div className="divider">
          <div className="divider-line"></div>
          <span className="divider-text">or continue with</span>
          <div className="divider-line"></div>
        </div>

        <div className="social-buttons">
          <button className="social-btn">
            <span className="social-icon">🔍</span>
            <span className="social-text">Google</span>
          </button>
          <button className="social-btn">
            <span className="social-icon">📘</span>
            <span className="social-text">Facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
}