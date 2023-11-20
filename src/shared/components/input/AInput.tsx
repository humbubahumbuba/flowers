import { ForwardRefRenderFunction, InputHTMLAttributes } from 'react';

interface AInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
  ref?: string;
}

export const AInput: ForwardRefRenderFunction<HTMLInputElement, AInputProps> = (
  { name, label, ...otherProps },
  ref
) => {
  return (
    <label className="label">
      {label}
      <input className={'input'} {...otherProps} name={name} ref={ref} />
    </label>
  );
};
