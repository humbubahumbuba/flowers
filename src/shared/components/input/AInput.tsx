import classNames from 'classnames';
import { FC, InputHTMLAttributes } from 'react';

interface AInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
}

export const AInput: FC<AInputProps> = ({
  name,
  label,
  className,
  ...props
}) => {
  return (
    <label className="label">
      {label}
      <input
        className={classNames('input', className)}
        {...props}
        name={name}
      />
    </label>
  );
};
