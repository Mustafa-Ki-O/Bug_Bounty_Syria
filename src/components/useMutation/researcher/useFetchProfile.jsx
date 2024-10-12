import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { FetchProfile } from "../../../api/researcher/fetchProfile";

const useFetchProfile = () => {
  const { mutate: fetchProfile, isLoading: isLoadingFetch } = useMutation({
    mutationFn: (setResearcher) => {
      FetchProfile().then((res) => setResearcher(res.data.researcher));
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
