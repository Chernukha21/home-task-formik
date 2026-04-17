import * as Yup from 'yup';


export const validationLoginSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
});

export const validationRegisterSchema = Yup.object({
    firstName: Yup
        .string()
        .min(2, 'min 2 symbols')
        .max(30, 'max 30 symbols')
        .required('First name is required'),

    lastName: Yup
        .string()
        .min(2, 'min 2 symbols')
        .max(30, 'max 30 symbols')
        .required('Last name is required'),

    displayName: Yup
        .string()
        .min(2, 'min 2 symbols')
        .max(30, 'max 30 symbols')
        .required('Display name is required'),

    email: Yup
        .string()
        .email('check email')
        .required('Email is required'),

    password: Yup
        .string()
        .min(6, 'min 6 symbols')
        .required('Password is required'),

    passwordConfirmation: Yup
        .string()
        .oneOf([Yup.ref('password')], 'confirmation pass must match password')
        .required('Password confirmation is required'),
    accountType: Yup.string().required('Choose account type'),
    agreeToTerms: Yup
        .boolean()
        .oneOf([true], 'You must accept terms of service'),
})