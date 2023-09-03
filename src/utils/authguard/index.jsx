import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/userSlice";
const AuthGuard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = localStorage.getItem("user");
  if (data) {
    const { displayName, email, photoURL } = JSON.parse(data);
    dispatch(login({ name: displayName, email, photo: photoURL }));
  }
  useEffect(() => {
    if (!data) {
      return navigate("/");
    }
  }, [navigate, data]);

  return <Outlet />;
};

export default AuthGuard;
