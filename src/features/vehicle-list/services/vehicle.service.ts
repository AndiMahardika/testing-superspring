import { BASE_URL_API } from '../../../constant/BASE_URL';

export interface VehicleData {
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

export async function getVehicleList() {
  const token = localStorage.getItem('token_super_spring');

  const response = await fetch(`${BASE_URL_API}/vehicle`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch vehicle list');
  }

  const data: VehicleListResponse = await response.json();

  return data;
}
