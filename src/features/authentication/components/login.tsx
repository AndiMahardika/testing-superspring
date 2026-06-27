import React from 'react';
import './auth.css';
import { Input } from '../../../components/ui/Input';
import { Button } from '../../../components/ui/Button';
import useLogin from '../hooks/useLogin';

export const Login = () => {
  const { email, setEmail, password, setPassword, isLoading, error, handleSubmit } = useLogin();

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2 className="login-title">
            Login to <span className="login-title-highlight">GPS.ID TMS</span> Account
          </h2>
          <p className="login-subtitle">
            Please enter your email and password to continue
          </p>
        </div>

        {error && (
          <p style={{ color: '#ef4444'}}>
            {error}
          </p>
        )}

        {/* Form Section */}
        <form className="login-form" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="login-form-group">
            <label className="label-form">
              Email address:
            </label>
            <Input
              type="text"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              placeholder="esteban_schiller@gmail.com"
              className="input-field"
              required
            />
          </div>

          {/* Password Input */}
          <div className="login-form-group">
            <div className="login-password-header">
              <label className="label-form">
                Password
              </label>
              <a href="#" className="login-forgot-link">
                Forget Password?
              </a>
            </div>
            <Input
              type="password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              placeholder="••••••"
              className="input-field"
              required
            />
          </div>

          {/* Remember Password Checkbox */}
          <div className="login-remember-group">
            <Input
              type="checkbox"
              id="remember"
              className="login-checkbox"
            />
            <label htmlFor="remember" className="login-checkbox-label">
              Remember Password
            </label>
          </div>

          {/* Sign In Button */}
          <Button
            type="submit"
            disabled={isLoading}
            style={{display: 'flex', justifyContent: 'center', width: '80%', margin: 'auto'}}
          > 
            {isLoading ? "Signing In..." : "Sign In"}
          </Button>

          {/* Footer Link */}
          <div className="login-footer">
            <p className="login-footer-text">
              Don't have an account?{' '}
              <a href="#" className="login-footer-link">
                Create Account
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};