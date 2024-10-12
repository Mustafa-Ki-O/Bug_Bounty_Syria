import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { PostProfile } from "../../../api/researcher/postProfile";

const useUpdateProfile = (setCompany) => {
  const { mutate: update, isLoading } = useMutation({
    mutationFn: (formData) => PostProfile(formData),
    onSuccess: (data) => {
      setCompany(data.data.researcher);
      toast.success("تم تحديث العلومات بنجاح");
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("اعد المحاولة ");
    },
  });
  return { update, isLoading };
};
export default useUpdateProfile;
