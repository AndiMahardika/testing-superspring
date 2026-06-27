import type { ReactNode } from 'react';

interface VehicleStatusItemProps {
  icon: ReactNode;
  label: string;
  className?: string;
}

export const VehicleStatusItem = ({ icon, label, className = '' }: VehicleStatusItemProps) => {
  return (
    <>
      <style>{`
        .vc-status-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 700;
          color: #333;
          width: fit-content;
        }

        .vc-status-item .icon-engine {
          color: #22c55e;
        }

        .vc-status-item .icon-signal {
          color: #a6a6a6;
        }

        .vc-status-item .icon-battery {
          color: #5a5b5c;
        }
      `}</style>
      <div className={`vc-status-item ${className}`}>
        {icon}
        {label}
      </div>
    </>
  );
};
