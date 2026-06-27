import type { ReactNode } from 'react';

interface VehicleFooterItemProps {
  label: string;
  value: ReactNode;
}

export const VehicleFooterItem = ({ label, value }: VehicleFooterItemProps) => {
  return (
    <>
      <style>{`
        .vc-footer-item {
          font-size: 10px;
          font-weight: 400;
          line-height: 100%;
          color: #1a1a1a;
          width: fit-content;
        }
      `}</style>
      <div className="vc-footer-item">
        {label} <span>{value}</span>
      </div>
    </>
  );
};
