import './auth.css';
import { Input } from '../../../components/ui/Input';
import { Button } from '../../../components/ui/Button';

export const Login = () => {
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

        {/* Form Section */}
        <form className="login-form">
          {/* Email Input */}
          <div className="login-form-group">
            <label className="label-form">
              Email address:
            </label>
            <Input
              type="email"
              placeholder="esteban_schiller@gmail.com"
              className="input-field"
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
              placeholder="••••••"
              className="input-field"
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
            className="btn-primary"
          >
            Sign In
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