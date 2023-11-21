import { FC, InputHTMLAttributes, useContext } from 'react';
import classNames from 'classnames';
import { useField } from 'formik';
import { NameContext } from '../field/AField';
import './input.scss';

interface AInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const AInput: FC<AInputProps> = ({ className, ...props }) => {
  const name = useContext(NameContext);
  const [field, meta] = useField(name);

  return (
    <label className="a-input">
      <input
        className={classNames('a-input__field', className, {
          'a-input__field--error': meta.touched && meta.error,
        })}
        {...props}
        value={field.value}
        name={name}
        onChange={field.onChange}
        onBlur={field.onBlur}
      />
    </label>
  );
};
