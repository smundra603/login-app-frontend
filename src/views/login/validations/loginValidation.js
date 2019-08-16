import * as yup from 'yup';

const LoginValidation = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .min(6)
    .matches('^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]$')
    .required()
});

export default LoginValidation;
