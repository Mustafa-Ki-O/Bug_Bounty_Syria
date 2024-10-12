import { useMutation } from "react-query";
import { LogOut } from "../../../api/researcher/logOut";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useLogout = () => {
  const navigate = useNavigate();
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: () => LogOut(),
    onSuccess: () => {
      navigate("/login");
      localStorage.removeItem("researcher");
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
