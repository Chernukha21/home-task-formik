import { ErrorMessage, Field, useFormikContext } from 'formik';
import classNames from 'classnames';
import classes from './FormikInput.module.scss';

const FormikInput = ({
                         name,
                         type = 'text',
                         placeholder = '',
                         autoFocus = false,
                     }) => {
    const { errors, touched } = useFormikContext();

    const hasError = touched[name] && errors[name];

    const inputClassName = classNames(classes.input, {
        [classes.inputError]: touched[name] && errors[name],
        [classes.inputSuccess]: touched[name] && !errors[name],
    });

    return (
        <label className={classes.field}>
            <Field
                className={inputClassName}
                type={type}
                name={name}
                placeholder={placeholder}
                autoFocus={autoFocus}
            />

            <ErrorMessage
                className={classes.error}
                name={name}
                component="span"
            />
        </label>
    );
};

export default FormikInput;