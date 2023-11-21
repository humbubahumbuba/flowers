import { AButton, AField, AInput } from '@/shared/components';
import { Form, Formik } from 'formik';
import { FC } from 'react';
import { initialValues, validationSchema } from './libs/validation';

export const FooterForm: FC = () => {
  const onSubmit = (values: typeof initialValues) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <AField name="email">
          <AInput
            type="email"
            className="w-full"
            placeholder="Please, enter an email"
          />
        </AField>
        <AButton type="submit" className="w-full">
          Remind
        </AButton>
      </Form>
    </Formik>
  );
};
