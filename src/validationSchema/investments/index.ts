import * as yup from 'yup';

export const investmentValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  startup_id: yup.string().nullable(),
  investor_id: yup.string().nullable(),
});
