import RegisterForm from '../../components/forms/register-form/RegisterForm.jsx';
import classes from './SignupPage.module.scss';

const SignupPage = () => {
  return (
    <section className={classes.signup_page}>
      <h1>Create an account</h1>
      <p>We always keep your name and email address private.</p>
      <RegisterForm />
    </section>
  );
};

export default SignupPage;
