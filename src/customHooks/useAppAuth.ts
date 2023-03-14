import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useAppDispatch, useAppSelector } from "hooks";
import { getToken } from "helpers/helpersAuth";
import { getUserData, refreshAccessToken } from "features/auth/authSlice";
import { setUnreadCount } from "features/conversations/conversationsSlice";

export const useAppAuth = () => {
  const token = getToken();
  const { user, loading } = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/signin");
      return;
    }
    const decodedToken: any = jwt_decode(token);
    if (decodedToken.exp < Date.now() / 1000) {
      dispatch(refreshAccessToken(navigate));
      return;
    }

    if (token && !user) {
      dispatch(getUserData(token));
      return;
    }

    dispatch(
      setUnreadCount({ newConnectionCount: user?.newConnections?.length })
    );
  }, [token, user]);

  return { loading };
};
