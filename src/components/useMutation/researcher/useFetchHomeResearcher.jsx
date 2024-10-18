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
    onError: (err) => {
      if (err.response) {
        const { status } = err.response;
        console.log("Response status:", status);
        if (status === 500) {
          navigate("/server-error");
        } else if (status === 404) {
          navigate("/not-found");
        } else if (status === 401) {
          navigate("/unauthorized");
        } else if (err.request) {
          navigate("/network-error");
        }
      } else {
        toast.error("حدث خطأ ما ,أعد المحاولة");
      }
    },
  });
  return { fetchResearcher, isLoading };
};
export default useFetchHomeResearcher;
