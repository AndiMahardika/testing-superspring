import { NavLink } from 'react-router-dom';
import { Menu, Grid2x2, List, Settings, Power, Clock3  } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

export const Sidebar = () => {
  const navLinks = [
    { label: "Dashboard", href: "/dashboard", icon: <Clock3 size={20} strokeWidth={2} /> },
    { label: "Job", href: "/job", icon: <Grid2x2  size={20} strokeWidth={2} /> },
    { label: "Vehicle Lists", href: "/vehicle-lists", icon: <List size={20} strokeWidth={2} /> },
  ];

  const authLinks = [
    { label: "Settings", href: "/settings", icon: <Settings size={20} strokeWidth={2} /> },
    { label: "Logout", href: "/logout", icon: <Power size={20} strokeWidth={2} /> },
  ];

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
          {navLinks.map((link, index) => (
            <NavLink 
              key={index} 
              to={link.href} 
              className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}
            >
              {link.icon}
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="sidebar-bottom">
        {authLinks.map((link, index) => (
          <a 
            key={index} 
            href={link.href} 
            className="sidebar-item"
          >
            {link.icon}
            {link.label}
          </a>
        ))}
      </div>
    </aside>
  );
};
