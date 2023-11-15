import clsx from 'clsx';

import BaseButton, {
  BaseButtonProps,
  BaseButtonComponent,
} from '../BaseButton/BaseButton';

import styles from './Button.module.scss';

export type ButtonProps<C extends BaseButtonComponent = 'button'> =
  BaseButtonProps<C> & {
    disabled?: boolean;
  };

export function Button<C extends BaseButtonComponent = 'button'>({
  className,
  disabled,
  ...props
}: ButtonProps<C>) {
  return (
    <BaseButton<C>
      className={clsx(
        styles.button,
        {
          [styles.disabled]: disabled,
        },
        className
      )}
      {...(props as BaseButtonProps<C>)}
    />
  );
}
