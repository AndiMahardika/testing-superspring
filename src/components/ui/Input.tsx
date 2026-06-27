import { type InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = ({ className = '', ...props }: InputProps) => {
  return (
    <input
      className={className}
      {...props}
    />
  );
}