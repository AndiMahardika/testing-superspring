import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import './dashboard.css';

export const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className={`dashboard-container${sidebarOpen ? '' : ' sidebar-collapsed'}`}>
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />

      <div className="dashboard-main">
        <Header />

        <main className="dashboard-content">
          <div style={{ textAlign: 'center', color: '#797a7b' }}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};