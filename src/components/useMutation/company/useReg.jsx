import { useMutation } from "react-query";
import toast from "react-hot-toast";
import PostCompany from "../../../api/copmany/postCompany";
import { useNavigate } from "react-router-dom";

const useReg = () => {
    const navigate = useNavigate();
    const {mutate:register ,isLoading: isLoading} = useMutation({
        mutationFn:(formData) => PostCompany(formData),
        onSuccess:() => {
            toast.success("تم انشاء الحساب بنجاح")   
            navigate("/loginCompany");
        },
        onError : (err) => {
            console.log('ERROR', err);
            toast.error(err.message);
        }
    })
  return {register,isLoading}
}
export default useReg