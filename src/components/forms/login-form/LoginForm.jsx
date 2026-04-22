import React from 'react';
import { Form, Formik } from 'formik';
import FormikInput from '../../input/formik-input/FormikInput.jsx';
import { validationLoginSchema } from '../../../utils/validationSchema.js';
import classes from './LoginForm.module.scss';

const LoginForm = () => {
  const initialValues = { email: '', password: '' };
  const handleSubmit = (values, formikBag) => {
    console.log('Submit form with values:', values);
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationLoginSchema}
    >
      <Form className={classes.login_form}>
        <FormikInput name="email" placeholder="Enter your email" />
        <FormikInput
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
