import { Sidebar } from './Sidebar';
import { Header } from './Header';
import './dashboard.css';

export const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="dashboard-container">
      <Sidebar />

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