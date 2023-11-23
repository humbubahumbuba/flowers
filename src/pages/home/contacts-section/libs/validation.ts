import * as Yup from 'yup';

export const initialValues = {
  phone: '',
};

export const validationSchema = Yup.object({
  phone: Yup.number().min(13).required().label('Phone'),
});
