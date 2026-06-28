import { DashboardLayout } from '../dashboard/components/Layout';
import { VehicleCard } from './components/VehicleCard';
import useVehicleList from './hooks/useVehicleList';

export const VehicleList = () => {
  const { vehicles, isLoading, error } = useVehicleList();

  if (isLoading) return <DashboardLayout><p>Loading...</p></DashboardLayout>;
  if (error) return <DashboardLayout><p style={{ color: '#ef4444' }}>{error}</p></DashboardLayout>;

  return (
    <DashboardLayout>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
      }}
      className="vehicle-grid"
      >
        {vehicles.map((v, i) => (
          <VehicleCard
            key={i}
            status={v.status}
            shipmentNumber={v.shipmentNumber}
            vehicleName={v.vehicleName}
            accOn={v.accOn}
            signal={v.signal}
            battery={v.battery}
            lastData={v.lastData}
            noGsm={v.noGsm}
            expired={v.expired}
          />
        ))}
      </div>
    </DashboardLayout>
  );
};

