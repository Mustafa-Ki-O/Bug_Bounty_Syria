import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { PostCode } from "../../../api/researcher/postCheckCode";
import { useNavigate } from "react-router-dom";

const useCheckCode = (token) => {
    const navigate = useNavigate();
    const {mutate:check ,isLoading: isLoading} = useMutation({
        mutationFn:(code) => PostCode(code,token),
        onSuccess:() => {
            toast.success("تم تأكيد الحساب")   
            navigate("/login");   
        },
        onError : (err) => {
            console.log('ERROR', err);
            toast.error(err.message);
        }
    })
  return {check,isLoading}
}
export default useCheckCode