import { NavLink } from 'react-router-dom';
import { Menu, Grid2x2, Settings, Power, Clock3 } from 'lucide-react';
import { TbListCheck } from "react-icons/tb";
import { RiStackFill } from "react-icons/ri";
import { BsFillBoxFill } from "react-icons/bs";
import { LuLayoutGrid } from "react-icons/lu";
import { Button } from '../../../components/ui/Button';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  const navLinks = [
    { 
      label: "Dashboard", 
      href: "/dashboard", 
      icon: isOpen ? <Clock3 size={20} strokeWidth={2} /> : <LuLayoutGrid size={20} /> 
    },
    { 
      label: "Job", 
      href: "/job", 
      icon: isOpen ? <Grid2x2 size={20} strokeWidth={2} /> : <BsFillBoxFill size={20} /> 
    },
    { 
      label: "Vehicle Lists", 
      href: "/vehicle-lists", 
      icon: isOpen ? <TbListCheck size={20} strokeWidth={2} /> : <RiStackFill size={20} /> 
    },
  ];

  const authLinks = [
    { label: "Settings", href: "/settings", icon: <Settings size={20} strokeWidth={2} /> },
    { label: "Logout", href: "/logout", icon: <Power size={20} strokeWidth={2} /> },
  ];

  return (
    <aside className={`dashboard-sidebar${isOpen ? '' : ' collapsed'}`}>
      <div className="sidebar-top">
        <div className="sidebar-logo-container">
          {isOpen && (
            <a href="#" className="sidebar-logo">
              GPS.ID TMS
            </a>
          )}
          <Button className="" aria-label="Toggle Sidebar" variant="ghost" onClick={onToggle}>
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
              {isOpen && link.label}
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
            {isOpen && link.label}
          </a>
        ))}
      </div>
    </aside>
  );
};
