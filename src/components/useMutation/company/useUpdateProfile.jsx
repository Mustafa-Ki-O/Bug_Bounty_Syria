import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { PostUpdateProfile } from "../../../api/copmany/postUpdateProfile";

const useUpdateProfile = (setCompany) => {
    const { mutate: update, isLoading } = useMutation({
      mutationFn: (formData) => PostUpdateProfile(formData),
      onSuccess: (data) => {
        setCompany(data.data.company); 
        toast.success('تم تحديث العلومات بنجاح');
      },
      onError: (err) => {
        console.log('ERROR', err);
        toast.error('اعد المحاولة ');
      }
    });
    return { update, isLoading };
  };
export default useUpdateProfile