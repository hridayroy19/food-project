import { useContext } from "react";
import { Authcontext } from "../provider/AuthProvider";
import useAxiosPrivet from "./useAxiosPrivet";

const useAdmin = () => {
    const { user} = useContext(Authcontext);
    const axiosPrivate = useAxiosPrivet();

    const { refetch, data:isAdmine, isPanding:isadmineLoading} = useQuery({
        queryKey: [user?.email,'isAdmin'],
        queryFn: async () => {
          const response = await axiosPrivate(`users/admine/${user?.email}`);
          console.log(response.data);
          return response.data.admin;
        },
      });

    return [isAdmine , isadmineLoading]
};

export default useAdmin;