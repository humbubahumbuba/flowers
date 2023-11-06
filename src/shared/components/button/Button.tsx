import { FC } from 'react';
import './button.scss';

interface ButtonProps {
  children: React.ReactNode;
  variant?: string;
}

export const Button: FC<ButtonProps> = ({ children }) => {
  return <button className="button">{children}</button>;
};
