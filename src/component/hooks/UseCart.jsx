import { useContext } from "react";
import { Authcontext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const UseCart = () => {
  const { user } = useContext(Authcontext);
//   console.log(user);

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:6001/addCart?email=${user?.email}`
      );
      return response.json();
    },
  });
  return [cart, refetch];
};

export default UseCart;
