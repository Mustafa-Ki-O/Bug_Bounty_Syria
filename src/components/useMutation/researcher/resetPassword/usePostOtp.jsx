import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { PostValidOtp } from "../../../../api/researcher/forget-password/postValidOtp";
import { useNavigate } from "react-router-dom";
// import ChangePasswordModal from "../../../profile/ChangePasswordModal";

const usePostOtp= () => {
    const navigate = useNavigate();
    const {mutate:postOtp , isLoading} = useMutation({
        mutationFn:(formData) => PostValidOtp(formData),
        onSuccess:() => {
            console.log('تم ارسال الرمز بنجاح')  
            toast.success('تم ارسال الرمز بنجاح')
            navigate('/changePassword')
        },
        onError : (err) => {
            console.log('ERROR', err);
            toast.error(err.message)
        }
    })
  return {postOtp ,isLoading}
}
export default usePostOtp