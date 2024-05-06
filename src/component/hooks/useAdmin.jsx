
import { useContext } from "react";
import { Authcontext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosPrivet from "./useAxiosPrivet";


const useAdmin = () => {
    const { user, loading } = useContext(Authcontext);
    const axiosSecure = useAxiosPrivet()
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async () => {
            console.log('checking is admin', user)
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            // console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;