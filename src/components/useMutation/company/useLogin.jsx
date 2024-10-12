import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { SignInCompany } from "../../../api/copmany/sighnInCompany";

const useLogin = () => {
    const navigate= useNavigate();
    const { mutate : login , isLoading } = useMutation({
        mutationFn:(formData) => SignInCompany(formData),
        onSuccess:() => {
            navigate('/home');
        },
        onError : (err) => {
            console.log('ERROR', err);
            toast.error('الايميل او كلمة السر خاطئة')
            
        }
    })
  return {login,isLoading}
}
export default useLogin