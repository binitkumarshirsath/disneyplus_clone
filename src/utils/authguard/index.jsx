import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectedUserEmail } from "../../store/userSlice";
import { useEffect } from "react";
const AuthGuard = () => {
  const navigate = useNavigate();
  const userEmail = useSelector(selectedUserEmail);
  useEffect(() => {
    if (!userEmail) {
      return navigate("/");
    }
  }, [navigate, userEmail]);
  return <Outlet />;
};

export default AuthGuard;
