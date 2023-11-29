import { AButton, AField, AInput } from '@/shared/components';
import { Form, Formik } from 'formik';
import { FC } from 'react';
import { initialValues, validationSchema } from './libs/validation';

export const ContactsForm: FC = () => {
  const onSubmit = (values: typeof initialValues) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="contacts-section__form">
        <AField name="phone">
          <AInput mask="+380#########" className="w-full" />
        </AField>
        <AButton type="submit" className="w-full">
          Remind
        </AButton>
      </Form>
    </Formik>
  );
};
