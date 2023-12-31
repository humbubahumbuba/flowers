import * as Yup from 'yup';

export const initialValues = {
  email: '',
};

export const validationSchema = Yup.object({
  email: Yup.string().email().required().label('Email'),
});
