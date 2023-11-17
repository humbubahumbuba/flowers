import { ButtonHTMLAttributes, FC } from 'react';
import classNames from 'classnames';
import './button.scss';

interface AButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'ghost';
  color?: 'primary' | 'secondary';
  width?: 'base' | 'custom';
}

export const AButton: FC<AButtonProps> = ({
  children,
  variant = 'solid',
  width = 'base',
  color = 'primary',
  type = 'button',

  ...props
}) => {
  return (
    <button
      type={type}
      className={classNames('button', {
        [`button--${variant}`]: variant,
        [`button--${color}`]: color,
        [`button--${width}`]: width,
      })}
      {...props}
    >
      {children}
    </button>
  );
};
