import { Sidebar } from './Sidebar';
import { Header } from './Header';
import './dashboard.css';

export const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="dashboard-main">
        <Header />

        <main className="dashboard-content">
          <div style={{ padding: '32px 30px', textAlign: 'center', color: '#797a7b' }}>
            Halaman konten utama
          </div>
        </main>
      </div>
    </div>
  );
};