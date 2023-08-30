import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useAppDispatch, useAppSelector } from "hooks";
import { getLocalUser, getToken } from "helpers/helpersAuth";
import { logout, setUser } from "features/auth/authSlice";
import { setUnreadCount } from "features/conversations/conversationsSlice";

export const useAppAuth = () => {
  const token = getToken();
  const { user: storeUser, loading } = useAppSelector((store) => store.auth);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const checkTokenAndUserData = async () => {
      if (!token) {
        navigate("/signin");
        return;
      }
      try {
        const decodedToken: any = jwt_decode(token);
        if (decodedToken.exp < Date.now() / 1000) {
          await dispatch(logout());
          navigate("/signin");
          // Handle token expiration or other refresh scenarios if needed
          // await dispatch(refreshAccessToken(navigate));
        } else if (!storeUser) {
          const localUser = getLocalUser();
          if (localUser?.email) {
            dispatch(setUser({ user: localUser }));
          } else {
            await dispatch(logout());
            navigate("/signin");
          }
        }

        if (storeUser?.newConnections) {
          dispatch(
            setUnreadCount({
              newConnectionCount: storeUser.newConnections.length,
            })
          );
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        navigate("/signin");
      }
    };

    checkTokenAndUserData();
  }, [token, storeUser, dispatch, navigate, loading]);

  return { loading };
};
