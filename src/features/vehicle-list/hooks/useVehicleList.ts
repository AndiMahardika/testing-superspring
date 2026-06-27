import { useState, useEffect } from 'react';

interface VehicleData {
  imei: string;
  owner: string;
  device_name: string;
  plate: string;
  gsm_no: string;
  activation_time: string;
  expired_gsm: string;
  gps_type: string;
  vehicle_type: string;
  nomesin: string | null;
  norangka: string | null;
  acc: string;
  longitude: string;
  latitude: string;
  angle: number;
  altitude: number | null;
  speed: number;
  mileage: number;
  address: string | null;
  door: string;
  temperature: number | null;
  last_positioning: string;
  last_update: string;
  satellite: number | null;
  gsm_signal: number;
  battery: string;
}

interface VehicleListResponse {
  status: boolean;
  message: {
    total: number;
    data: VehicleData[];
  };
}

export interface VehicleCardData {
  status: string;
  shipmentNumber: string;
  vehicleName: string;
  accOn: boolean;
  signal: string;
  battery: number;
  lastData: string;
  noGsm: string;
  expired: string;
}

export default function useVehicleList() {
  const [vehicles, setVehicles] = useState<VehicleCardData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchVehicles = async () => {
    const token = localStorage.getItem('token_super_spring');
    if (!token) {
      setError('No token found. Please login first.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('https://dev-portal.gps.id/backend/seen/public/vehicle', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result: VehicleListResponse = await response.json();

      if (result.status === true) {
        const mapped: VehicleCardData[] = result.message.data.map((v) => ({
          status: v.acc === 'ON' && v.speed > 0 ? 'Running' : v.acc === 'OFF' && v.speed === 0 ? 'Parking' : v.acc === 'ON' && v.speed === 0 ? 'Stop' : 'Unknown',
          shipmentNumber: v.imei,
          vehicleName: v.plate || v.device_name,
          accOn: v.acc === 'ON',
          signal: v.gsm_signal != null ? `${v.gsm_signal}` : 'N/A',
          battery: parseInt(v.battery, 10) || 0,
          lastData: v.last_positioning,
          noGsm: v.gsm_no,
          expired: v.expired_gsm,
        }));
        setVehicles(mapped);
      } else {
        setError('Failed to fetch vehicle list.');
      }
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
