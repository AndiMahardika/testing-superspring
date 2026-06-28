import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import './dashboard.css';

export const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  const [sidebarOpen, setSidebarOpen] = useState(() => {
    const saved = localStorage.getItem('sidebarOpen');
    return saved !== null ? JSON.parse(saved) : true;
  });

  const toggleSidebar = () => {
    setSidebarOpen(prev => {
      const next = !prev;
      localStorage.setItem('sidebarOpen', JSON.stringify(next));
      return next;
    });
  };

  return (
    <div className={`dashboard-container${sidebarOpen ? '' : ' sidebar-collapsed'}`}>
      <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />

      <div className="dashboard-main">
        <Header onToggleSidebar={toggleSidebar} />

        <main className="dashboard-content">
          <div style={{ textAlign: 'center', color: '#797a7b' }}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};