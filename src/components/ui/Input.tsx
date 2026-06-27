import { type InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = ({ className = '', ...props }: InputProps) => {
  return (
    <>
      <style>{`
        .input-field {
          padding: 16px;
          border: 1px solid #d8d8d8;
          border-radius: 8px;
          font-size: 18px;
          font-weight: 600;
          line-height: 100%;
          letter-spacing: -0.06px;
          color: #514f4fff;
          background-color: #f1f4f9;
        }
      `}</style>
      <input
        className={className}
        {...props}
      />
    </>
  );
};