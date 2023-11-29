import * as Yup from 'yup';

export const initialValues = {
  phone: '',
};

export const validationSchema = Yup.object({
  phone: Yup.string().phone().required().label('Phone'),
});
