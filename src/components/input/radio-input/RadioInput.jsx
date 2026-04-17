import React from 'react';
import classes from './RadioInput.module.scss';
import {ErrorMessage, Field} from "formik";

const RadioInput = () => {
    return (
        <div className={classes['radio_input-wrapper']}>
            <label className={classes.radio_input}>
                <Field type="radio" name="accountType" value="buyer" />
                <div className={classes.option_field}>
                    <span className={classes.optionTitle}>Join As a Buyer</span>
                    <span className={classes.optionText}>
                        I am looking for a Name, Logo or Tagline for my business, brand or product.
                     </span>
                </div>
            </label>

            <label className={classes.radio_input}>
                <Field type="radio" name="accountType" value="creative" />
                <div className={classes.option_field}>
                    <span className={classes.optionTitle}>Join As a Creative</span>
                    <span className={classes.optionText}>
                        I plan to submit name ideas, logo designs, or sell names in Domain Marketplace
                     </span>
                </div>
            </label>

            <ErrorMessage
                name="accountType"
                component="span"
                className={classes.error}
            />
        </div>
    );
};

export default RadioInput;