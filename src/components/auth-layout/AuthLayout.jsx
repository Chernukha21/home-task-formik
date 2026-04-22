import { Link, Outlet, useLocation } from 'react-router-dom';
import classes from './AuthLayout.module.css';
const AuthLayout = () => {
  const { pathname } = useLocation();

  const isLoginPage = pathname === '/login';

  return (
    <div className={classes.container}>
      <header>
        <div className={classes.logo}></div>
        <div className={classes.login_button}>
          <Link to={isLoginPage ? '/signup' : '/login'}>
            {isLoginPage ? 'Signup' : 'Login'}
          </Link>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
