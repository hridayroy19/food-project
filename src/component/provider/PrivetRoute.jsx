import { useContext } from "react";
import { Authcontext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../sheard/Loading";

const PrivetRoute = ({ children}) => {

    const { user, loading } = useContext(Authcontext)
    const location = useLocation()

      if (loading) {
          return <Loading></Loading>
      }
      if (user){
        return  children
      }
    return (
        <Navigate to={"/signup"} state={{from: location}} replace ></Navigate>
    );
};

export default PrivetRoute;