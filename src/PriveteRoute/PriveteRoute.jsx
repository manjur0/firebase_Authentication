import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loader from "../Components/Loader/Loader";

const PriveteRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  // loading here
  if (loading) {
    return <Loader></Loader>;
  }

  if (!user) {
    return <Navigate to={"/login"}></Navigate>;
  }

  return children;
};

export default PriveteRoute;
