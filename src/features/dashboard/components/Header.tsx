import { Search, Bell, ChevronDown } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import { LanguageSelector } from './LanguageSelector';

export const Header = () => {
  return (
    <header className="dashboard-header">
      <div className="header-left">
        <div className="header-search-container">
          <Search className="header-search-icon" size={20} strokeWidth={2.5} />
          <input 
            type="text" 
            placeholder="Search" 
            className="header-search-input"
          />
        </div>
      </div>

      <div className="header-right">
        {/* Notification*/}
        <Button className="header-action-btn" aria-label="Notifications" variant="ghost">
          <Bell size={24} strokeWidth={2} />
          <span className="header-badge">6</span>
        </Button>

        <LanguageSelector />

        {/* User Profile */}
        <div className="header-profile">
          <div style={{display: 'flex', gap: '12px'}}>
            <img 
              src="https://i.pinimg.com/736x/d2/70/55/d2705542ca1d6486cd3d5ba72d6bf014.jpg" 
              className="profile-avatar" 
              alt="Aldy Admin" 
              />
            <div className="profile-info">
              <span className="profile-name">Aldy</span>
              <span className="profile-role">Admin</span>
            </div>
          </div>
          <span style={{border: '1px solid #e5e7eb', padding: '3px', borderRadius: '16px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center'}}>
            <ChevronDown size={16} strokeWidth={2.5} />
          </span>
        </div>
      </div>
    </header>
  );
};
