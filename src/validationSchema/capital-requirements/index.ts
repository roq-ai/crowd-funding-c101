import * as yup from 'yup';

export const capitalRequirementValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  startup_id: yup.string().nullable(),
});
