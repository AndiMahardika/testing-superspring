import { DashboardLayout } from '../dashboard/components/Layout';
import { VehicleCard } from './components/VehicleCard';

const dummyVehicles = [
  { vehicleName: 'B 1234 QWE - TRUCK 0001', shipmentNumber: '35ACB95238' },
  { vehicleName: 'B 5678 RTY - TRUCK 0002', shipmentNumber: '35ACB95239' }
];

export const VehicleList = () => {
  return (
    <DashboardLayout>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
      }}>
        {dummyVehicles.map((v, i) => (
          <VehicleCard
            key={i}
            vehicleName={v.vehicleName}
            shipmentNumber={v.shipmentNumber}
          />
        ))}
      </div>
    </DashboardLayout>
  );
};

