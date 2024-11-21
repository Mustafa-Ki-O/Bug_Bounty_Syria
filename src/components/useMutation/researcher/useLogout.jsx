import { useMutation } from "react-query";
import { LogOut } from "../../../api/researcher/logOut";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useLogout = () => {
  const navigate = useNavigate();
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: () => LogOut(),
    onSuccess: () => {
      navigate("/Bug_Bounty_Syria/login");
      toast.success("تم تسجيل الخروج بنجاح");
      console.log("تم تسجيل الخروج بنجاح");
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });
  return { logout, isLoading };
};
export default useLogout;
