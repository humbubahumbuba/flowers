import {
  ChangeEvent,
  FC,
  InputHTMLAttributes,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import classNames from 'classnames';
import { useField } from 'formik';
import { Mask } from 'maska';
import { NameContext } from '../field/AField';
import './input.scss';

interface AInputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask?: string;
}

export const AInput: FC<AInputProps> = ({ className, ...props }) => {
  const name = useContext(NameContext);
  const [field, meta, { setValue }] = useField(name);
  const ref = useRef<HTMLInputElement>(null);
  const [mask, setMask] = useState<Mask>();

  const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    const hasMask = !!(props.mask && mask);

    setValue(hasMask ? mask.masked(value) : value);
  };

  const initMaska = () => {
    if (!props.mask) {
      return;
    }

    setMask(new Mask({ mask: props.mask }));
  };

  useEffect(() => {
    initMaska();
  }, []);

  return (
    <label className="a-input">
      <input
        ref={ref}
        className={classNames('a-input__field', className, {
          'a-input__field--error': meta.touched && meta.error,
        })}
        {...props}
        value={field.value}
        name={name}
        onChange={onChange}
        onBlur={field.onBlur}
      />
    </label>
  );
};
