import { useMutation } from "react-query";
import postChangePassword from "../../../api/copmany/postChangePassword";
import toast from "react-hot-toast";

const useChangepassword = () => {
    const {mutate:change , isLoading} = useMutation({
        mutationFn:(formData) => postChangePassword(formData),
        onSuccess:() => {
            console.log('تم تحديث كلمة المرور بنجاح')     
            toast.success('تم تحديث كلمة المرور بنجاح')
        },
        onError : (err) => {
            console.log('ERROR', err);
            toast.error("حدث خطأ ما ,أعد المحاولة")
        }
    })
  return {change,isLoading}
}
export default useChangepassword