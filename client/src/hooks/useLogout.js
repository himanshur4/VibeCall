import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../lib/api.js";
import toast from "react-hot-toast";

const useLogout = () => {


const queryClient=useQueryClient();
  const {mutate,isPending,error}=useMutation({
    mutationFn:logout,
    onSuccess:()=>{queryClient.invalidateQueries({queryKey:["authUser"]});
    toast.success("Logout Successful");
  }

  })
  return {logoutMutation:mutate,isPending,error};

}

export default useLogout
