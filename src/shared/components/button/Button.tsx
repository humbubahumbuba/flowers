import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import './button.scss';

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  variant?: string;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({ children }) => {
  return <button className={'button'}>{children}</button>;
};
