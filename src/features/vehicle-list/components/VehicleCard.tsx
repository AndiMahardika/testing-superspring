import { PiEngineBold, PiBatteryHigh } from 'react-icons/pi';
import { FaSatelliteDish } from 'react-icons/fa';
import carImg from '../../../assets/car.png';
import gaugeImg from '../../../assets/gauge.png';
import shopSearchIcon from '../../../assets/shop-search.ico';
import { VehicleStatusItem } from './VehicleStatusItem';
import { VehicleFooterItem } from './VehicleFooterItem';

export interface VehicleCardProps {
  status?: string;
  shipmentNumber?: string;
  vehicleName?: string;
  accOn?: boolean;
  signal?: string;
  battery?: number;
  lastData?: string;
  noGsm?: string;
  expired?: string;
}

export const VehicleCard = ({
  status = 'Dispatch',
  shipmentNumber = '35ACB95238',
  vehicleName = 'B 1234 QWE - TRUCK 0001',
  accOn = true,
  signal = 'N/A',
  battery = 100,
  lastData = '31-12-2022 16:00:00',
  noGsm = '081987654321',
  expired = '31-12-2023',
}: VehicleCardProps) => {
  return (
    <>
      <style>{`
        .vehicle-card {
          border-radius: 8px;
          overflow: hidden;
          font-family: inherit;
        }

        .vc-header {
          display: flex;
          font-size: 13px;
          color: #797a7b;
          font-weight: 600;
          object-fit: contain;
          background-color: transparent;
        }

        .vc-header img {
          width: 18px;
          height: 18px;
          object-fit: contain;
        }

        .vc-status-text {
          font-weight: 700;
          color: #1a1a1a;
        }

        .vc-body {
          display: flex;
          align-items: center;
          padding: 16px;
          padding-bottom: 0px;
        }

        .vc-gauge {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          min-width: 80px;
        }

        .vc-gauge img {
          width: 96px;
          height: 50px;
          object-fit: contain;
        }

        .vc-tracker img {
          width: 36px;
          height: 56px;
          object-fit: contain;
          margin-right: 8px;
        }

        .vc-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .vc-shipment {
          font-size: 12px;
          color: #a6a6a6;
          font-weight: 400;
        }

        .vc-shipment span {
          font-weight: 700;
          color: #5a5b5c;
        }

        .vc-vehicle-name {
          font-size: 18px;
          font-weight: 800;
          color: #1a1a1a;
          letter-spacing: -0.3px;
        }

        .vc-status-row {
          display: flex;
          justify-content: space-between;
          padding-top: 20px;
          padding-bottom: 0;
          padding-left: 20px;
          padding-right: 20px;
        }

        .vc-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: #F5F7FD;
          padding: 4px 12px;
          margin: 20px;
        }

        @media (max-width: 768px) {
          .vc-status-row {
            flex-wrap: wrap;
            gap: 8px;
          }

          .vc-footer {
            flex-wrap: wrap;
            gap: 8px;
          }

          .vc-body {
            flex-wrap: wrap;
            gap: 12px;
          }

          .vc-gauge img {
            width: 72px;
            height: 40px;
          }
        }
      `}</style>

      <div className="vehicle-card">
        {/* Header */}
        <div className="vc-header">
          <div style={{ display: 'flex', gap: '4px', alignItems: 'center', backgroundColor: 'white', paddingLeft: '20px',paddingRight: '20px', height: '36px', borderRadius: '5px 5px 0px 0px' }}>
            <span>Status :</span>
            <img src={shopSearchIcon} alt="status-icon" />
            <span className="vc-status-text">{status}</span>
          </div>
        </div>

        <div style={{ backgroundColor: 'white', borderRadius: '0px 8px 8px 8px', overflow: 'hidden' }}>
        <div className="vc-body">
          <div className="vc-gauge">
            <img src={gaugeImg} alt="speedometer" />
          </div>
          <div className="vc-tracker">
            <img src={carImg} alt="tracker" />
          </div>
          <div className="vc-info">
            <p className="vc-shipment">
              Shipment Number <span>{shipmentNumber}</span>
            </p>
            <p className="vc-vehicle-name">{vehicleName}</p>
          </div>
        </div>

        {/* Status Row */}
        <div className="vc-status-row">
          <VehicleStatusItem
            icon={<PiEngineBold size={20} className={`icon-engine${!accOn ? ' icon-engine-off' : ''}`} />}
            label={accOn ? 'ACC ON' : 'ACC OFF'}
          />
          <VehicleStatusItem
            icon={<FaSatelliteDish size={20} className="icon-signal" />}
            label={signal}
          />
          <VehicleStatusItem
            icon={<PiBatteryHigh size={20} className="icon-battery" />}
            label={`${battery}%`}
          />
        </div>

        <div className="vc-footer">
          <VehicleFooterItem label="Data Terakhir :" value={lastData} />
          <VehicleFooterItem label="No GSM :" value={noGsm} />
          <VehicleFooterItem label="Expired :" value={expired} />
        </div>
        </div>
      </div>
    </>
  );
};
