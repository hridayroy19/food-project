import { useContext } from "react";
import { Authcontext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const UseCart = () => {
  const { user } = useContext(Authcontext);
//   console.log(user);
const token = localStorage.getItem('access-token')

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:6002/addCart?email=${user?.email}`,{
          headers:{
            authorization:`Bearer${token}`
          }
        }
      );
      return response.json();
    },
  });
  return [cart, refetch];
};

export default UseCart;
