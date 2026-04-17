import React from 'react';
import FormikInput from "../../input/formik-input/FormikInput.jsx";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {validationRegisterSchema} from "../../../utils/validationSchema.js";
import classes from "./RegisterForm.module.scss";
import RadioInput from "../../input/radio-input/RadioInput.jsx";

const RegisterForm = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        displayName: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        accountType: '',
        agreeToTerms: false,
    };
    const handleSubmit = (values, formikBag) => {
        console.log('Submit form with values:', values);
        formikBag.resetForm();
    };
    return (
        <Formik initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationRegisterSchema}
        >
            <Form className={classes.register_form}>
                <div className={classes.fields}>
                    <FormikInput name="firstName" placeholder="First name"/>
                    <FormikInput name="lastName" placeholder="Last name"/>

                    <FormikInput name="displayName" placeholder="Display name"/>
                    <FormikInput name="email" placeholder="Email"/>

                    <FormikInput name="password" type="password" placeholder="Password"/>
                    <FormikInput
                        name="passwordConfirmation"
                        type="password"
                        placeholder="Confirm password"
                    />
                </div>
                <RadioInput/>
                <label className={classes.terms}>
                    <Field type="checkbox" name="agreeToTerms"/>
                    <span className={classes.checkboxMark}></span>
                    <span>
                        By clicking this checkbox, you agree to our <a href="/">Terms of Service.</a>
                  </span>
                <ErrorMessage
                    name="agreeToTerms"
                    component="span"
                    className={classes.error}
                />
                </label>
                <button type="submit">Create Account</button>
            </Form>
        </Formik>
    )
};

export default RegisterForm;