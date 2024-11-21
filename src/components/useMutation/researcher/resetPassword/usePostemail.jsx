import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { PostForgetPassword } from "../../../../api/researcher/forget-password/postForgetPassword";
import { useNavigate } from "react-router-dom";

const usePostemail = () => {
    const navigate = useNavigate();
    const {mutate:postEmail , isLoading} = useMutation({
        mutationFn:(formData) => PostForgetPassword(formData),
        onSuccess:() => {
            console.log('تم تحديث كلمة المرور بنجاح')  
            toast.success('ستصلك رسالة برمز التفعيل')
            navigate('/Bug_Bounty_Syria/checkcode')
            
        },
        onError : (err) => {
            console.log('ERROR', err);
            toast.error(err.message)
        }
    })
  return {postEmail ,isLoading}
}
export default usePostemail