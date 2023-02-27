// authMiddleware.js
import { loginSuccess } from './authSlice';

export const authMiddleware = ({ dispatch }) => (next) => (action) => {
  if (action.type === 'auth/loginSuccess') {
    localStorage.setItem('token', action.payload);
  }
  if (action.type === 'auth/logout') {
    localStorage.removeItem('token');
  }
  next(action);
};

export const checkTokenExpirationMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  const token = getState().auth.token;
  const tokenExpiration = jwt.decode(token)?.exp * 1000;
  if (tokenExpiration && tokenExpiration < Date.now()) {
    // token has expired, refresh it
    const response = await fetch('/api/auth/refresh', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    });
    const data = await response.json();
    if (response.ok) {
      dispatch(loginSuccess(data.token));
    } else {
      dispatch(logout());
    }
  }
  next(action);
};
