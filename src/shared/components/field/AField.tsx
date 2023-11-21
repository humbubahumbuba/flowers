import { FC, createContext } from 'react';
import classNames from 'classnames';
import { useField } from 'formik';
import './field.scss';

interface AFieldProps {
  children: React.ReactNode;
  name: string;
  label?: string;
  className?: string;
}

export const NameContext = createContext<string>('name');

export const AField: FC<AFieldProps> = ({
  className,
  label,
  name,
  children,
}) => {
  const [, meta] = useField({ name });

  return (
    <NameContext.Provider value={name}>
      <div className={classNames('a-field', className)}>
        {label && <div className="a-field__label">{label}</div>}
        {children}
        {meta.error && <div className="a-field__error">{meta.error}</div>}
      </div>
    </NameContext.Provider>
  );
};
