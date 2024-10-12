import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { SignIn } from "../../../api/researcher/signIn";

const useLogin = () => {
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: (formData) => SignIn(formData),
    onSuccess: () => {
      toast.success("تم تسجيل الدخول بنجاح");
      navigate("/home");
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("الايميل او كلمة السر خاطئة");
    },
  });
  return { login, isLoading };
};
export default useLogin;
