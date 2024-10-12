import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { fetchDataCompanyProfile } from "../../../api/copmany/fetchDataCompanyProfile";

const useFetchProfile = () => {
  const { mutate: fetchProfile, isLoading: isLoadingFetch } = useMutation({
    mutationFn: (setCompany) => {
      fetchDataCompanyProfile().then((res) => setCompany(res.data.company));
    },
    onSuccess: () => {
      console.log("تم جلب البيانات بنجاح");
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("لم يتم جلب البيانات");
    },
  });
  return { fetchProfile,  isLoadingFetch };
};
export default useFetchProfile;
