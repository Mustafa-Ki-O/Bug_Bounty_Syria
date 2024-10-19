import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { FetchHome } from "../../../api/researcher/fetchHome";
import { useNavigate } from "react-router-dom";

const useFetchHomeResearcher = () => {
  const navigate = useNavigate();
  const { mutate: fetchResearcher, isLoading } = useMutation({
    mutationFn: (setCompanies) =>
      FetchHome({}).then((res) => setCompanies(res.data.companies)),
    onSuccess: () => {
      console.log("تم جلب البيانات بنجاح");
    },
    onError: () => {
        toast.error("حدث خطأ ما ,أعد المحاولة");
    },
  });
  return { fetchResearcher, isLoading };
};
export default useFetchHomeResearcher;
