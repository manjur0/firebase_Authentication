import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PriveteRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to={"/login"}></Navigate>;
  }

  return children;
};

export default PriveteRoute;
