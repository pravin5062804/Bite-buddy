import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, ArrowRight, Shield, User } from 'lucide-react';


export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      console.log('Login Data:', { ...formData, rememberMe });
      setIsLoading(false);
    }, 2000);
  };

  const handleGuestLogin = () => {
    console.log('Guest login requested');
  };

  return (
    <div className="login-container">
      {/* Background Pattern */}
      <div className="background-pattern">
        <div className="pattern-circle circle-1"></div>
        <div className="pattern-circle circle-2"></div>
        <div className="pattern-circle circle-3"></div>
        <div className="pattern-circle circle-4"></div>
      </div>

      {/* Left Side - Branding */}
      <div className="branding-section">
        <div className="brand-content">
          <div className="brand-icon">🍽️</div>
          <h1 className="brand-title">BiteBuddy</h1>
          <p className="brand-tagline">Your Ultimate Food Companion</p>
          
          <div className="feature-list">
            <div className="feature-item">
              <div className="feature-icon">🍕</div>
              <span>Discover Amazing Recipes</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⭐</div>
              <span>Rate & Review Restaurants</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">👥</div>
              <span>Connect with Food Lovers</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📱</div>
              <span>Track Your Food Journey</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="login-section">
        <div className="login-card">
          <div className="login-header">
            <div className="welcome-icon">
              <User size={32} className="user-icon" />
            </div>
            <h2 className="login-title">Welcome Back!</h2>
            <p className="login-subtitle">Please sign in to your account to continue your culinary adventure</p>
          </div>

          <div className="login-form">
            <div className="input-wrapper">
              <div className="input-label">Email Address</div>
              <div className="input-container">
                <Mail size={20} className="input-icon-left" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="login-input"
                  required
                />
              </div>
            </div>

            <div className="input-wrapper">
              <div className="input-label">Password</div>
              <div className="input-container">
                <Lock size={20} className="input-icon-left" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="login-input"
                  required
                />
                <div
                  className="input-icon-right"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </div>
              </div>
            </div>

            <div className="form-options">
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="checkbox-input"
                />
                <span className="checkbox-checkmark"></span>
                <span className="checkbox-label">Remember me</span>
              </label>
              
              <a href="#" className="forgot-link">Forgot Password?</a>
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              className={`login-btn ${isLoading ? 'loading' : ''}`}
            >
              {isLoading ? (
                <div className="loading-spinner"></div>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight size={20} className="btn-icon" />
                </>
              )}
            </button>

            <div className="alternative-login">
              <button onClick={handleGuestLogin} className="guest-btn">
                <Shield size={18} />
                <span>Continue as Guest</span>
              </button>
            </div>
          </div>

          <div className="social-login">
            <div className="social-divider">
              <span>Or sign in with</span>
            </div>
            
            <div className="social-buttons-grid">
              <button className="social-login-btn google-btn">
                <div className="social-btn-icon">G</div>
                <span>Google</span>
              </button>
              
              <button className="social-login-btn facebook-btn">
                <div className="social-btn-icon">f</div>
                <span>Facebook</span>
              </button>
              
              <button className="social-login-btn apple-btn">
                <div className="social-btn-icon">🍎</div>
                <span>Apple</span>
              </button>
            </div>
          </div>

          <div className="signup-prompt">
            <p>Don't have an account? <a href="#" className="signup-link">Create Account</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}