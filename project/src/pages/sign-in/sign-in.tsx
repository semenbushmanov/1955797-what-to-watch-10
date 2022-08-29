import Logo from '../../components/logo/logo';
import Copyright from '../../components/copyright/copyright';
import { useRef, FormEvent } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-authorization/selectors';
import { loginAction } from '../../store/api-actions';
import { AuthData } from '../../types/auth-data';
import { AppRoute, AuthorizationStatus } from '../../const';
import { toast } from 'react-toastify';

function SignIn(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null) {
      const isEmailValid = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(emailRef.current.value);
      const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{2,}$/.test(passwordRef.current.value);

      if (!isEmailValid) {
        toast.warn('Please enter a valid email address');
        return;
      }

      if (!isPasswordValid) {
        toast.warn('Password must contain at least one number and one letter');
        return;
      }

      onSubmit({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  return (
    authorizationStatus === AuthorizationStatus.Auth ?
      <Navigate to={AppRoute.Main}/>
      :
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo />

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form action="" className="sign-in__form" onSubmit={handleSubmit}>
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input
                  className="sign-in__input"
                  type="email"
                  placeholder="Email address"
                  name="user-email"
                  id="user-email"
                  ref={emailRef}
                  required
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input
                  className="sign-in__input"
                  type="password"
                  placeholder="Password"
                  name="user-password"
                  id="user-password"
                  ref={passwordRef}
                  required
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button
                className="sign-in__btn"
                type="submit"
              >
              Sign in
              </button>
            </div>
          </form>
        </div>

        <footer className="page-footer">
          <Logo logoStyle='light'/>

          <Copyright />
        </footer>
      </div>
  );
}

export default SignIn;
