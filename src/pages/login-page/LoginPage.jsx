import LoginForm from '../../components/forms/login-form/LoginForm.jsx';
import classes from './LoginPage.module.scss';

const LoginPage = () => {
  return (
    <section className={classes.loginPage}>
      <h1>Login to your account</h1>
      <LoginForm />
    </section>
  );
};

export default LoginPage;
