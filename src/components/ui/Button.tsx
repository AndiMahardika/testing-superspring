import { type ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({ children, className = '', variant = 'primary', ...props }: ButtonProps) {
  const getVariantClass = () => {
    switch (variant) {
      case 'ghost':
        return 'btn-ghost';
      case 'outline':
        return 'btn-outline';
      case 'secondary':
        return 'btn-secondary';
      case 'primary':
      default:
        return 'btn-primary';
    }
  };

  return (
    <>
      <style>{`
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-family: inherit;
          border: none;
          cursor: pointer;
          box-sizing: border-box;
          transition: all 0.2s ease;
        }

        .btn-primary {
          background-color: #52a8f2;
          color: white;
          padding: 14px 24px;
          border-radius: 8px;
          font-size: 18px;
          font-weight: 600;
        }

        .btn-ghost {
          background-color: transparent;
          color: inherit;
          border-radius: 8px;
        }
      `}</style>
      <button className={`btn ${getVariantClass()} ${className}`} {...props}>
        {children}
      </button>
    </>
  );
}