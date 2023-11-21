import { ButtonHTMLAttributes, FC } from 'react';
import classNames from 'classnames';
import './button.scss';

interface AButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'ghost';
  color?: 'primary' | 'secondary';
}

export const AButton: FC<AButtonProps> = ({
  children,
  variant = 'solid',
  color = 'primary',
  type = 'button',
  className,
  ...props
}) => {
  return (
    <button
      type={type}
      className={classNames('button', className, {
        [`button--${variant}`]: variant,
        [`button--${color}`]: color,
      })}
      {...props}
    >
      {children}
    </button>
  );
};
