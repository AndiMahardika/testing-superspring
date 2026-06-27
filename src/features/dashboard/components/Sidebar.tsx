import { NavLink } from 'react-router-dom';
import { Menu, Grid2x2, List, Settings, Power, Clock3  } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

export const Sidebar = () => {
  return (
    <aside className="dashboard-sidebar">
      <div className="sidebar-top">
        <div className="sidebar-logo-container">
          <a href="#" className="sidebar-logo">
            GPS.ID TMS
          </a>
          <Button className="" aria-label="Toggle Sidebar" variant="ghost">
            <Menu size={20} strokeWidth={2.5} />
          </Button>
        </div>

        <nav className="sidebar-menu">
          <NavLink 
            to="/dashboard" 
            className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}
          >
            <Clock3 size={20} strokeWidth={2} />
            Dashboard
          </NavLink>

          <a href="#" className="sidebar-item">
            <Grid2x2  size={20} strokeWidth={2} />
            Job
          </a>

          <a href="#" className="sidebar-item active">
            <List size={20} strokeWidth={2} />
            Vehicle Lists
          </a>
        </nav>
      </div>

      <div className="sidebar-bottom">
        <a href="#" className="sidebar-item">
          <Settings size={20} strokeWidth={2} />
          Settings
        </a>

        <Button className="sidebar-item" variant="ghost">
          <Power size={20} strokeWidth={2} />
          Logout
        </Button>
      </div>
    </aside>
  );
};
