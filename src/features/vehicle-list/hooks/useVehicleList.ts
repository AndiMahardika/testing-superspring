import { useState, useEffect } from 'react';
import { getVehicleList } from '../services/vehicle.service';
import type { VehicleData } from '../services/vehicle.service';

export interface VehicleCardData {
  status: string;
  shipmentNumber: string;
  vehicleName: string;
  plate: string;
  accOn: boolean;
  signal: string;
  battery: number;
  lastData: string;
  noGsm: string;
  expired: string;
}

function mapVehicleToCard(v: VehicleData): VehicleCardData {
  return {
    status:
      v.acc === 'ON' && v.speed > 0
        ? 'Running'
        : v.acc === 'OFF' && v.speed === 0
          ? 'Parking'
          : v.acc === 'ON' && v.speed === 0
            ? 'Stop'
            : 'Unknown',
    shipmentNumber: v.imei,
    vehicleName: v.device_name,
    plate: v.plate,
    accOn: v.acc === 'ON',
    signal: v.gsm_signal != null ? `${v.gsm_signal}` : 'N/A',
    battery: parseInt(v.battery, 10) || 0,
    lastData: v.last_positioning,
    noGsm: v.gsm_no,
    expired: v.expired_gsm,
  };
}

export default function useVehicleList() {
  const [vehicles, setVehicles] = useState<VehicleCardData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchVehicles = async () => {
    setIsLoading(true);
    setError('');

    try {
      const result = await getVehicleList();
      const mapped = result.message.data.map((v: VehicleData) => mapVehicleToCard(v));
      setVehicles(mapped);
    } catch {
      setError('Network error. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  return { vehicles, isLoading, error, refetch: fetchVehicles };
}
