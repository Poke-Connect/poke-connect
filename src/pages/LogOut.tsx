import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "hooks";

const LogOut: FC = () => {
  const navigate = useNavigate();
  const { user } = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch();

  const onLogOutPressHandler = async () => {
    if (!user) {
      navigate(`/signin`);
      return;
    }
    try {
      dispatch(logout());
      navigate(`/signin`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onLogOutPressHandler();
    navigate("/");
  }, []);

  return null;
};

export default LogOut;
