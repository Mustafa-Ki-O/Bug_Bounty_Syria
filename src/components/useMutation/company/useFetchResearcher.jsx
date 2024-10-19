import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { FetchResProfile } from "../../../api/copmany/FetchResProfile";
import { useNavigate } from "react-router-dom";

const useFetchResearcher = (setSelectedRes, setResReports) => {
  const navigate = useNavigate();

  const { mutate: fetchResearcher, isLoading } = useMutation({
    mutationFn: (id) => {
      return FetchResProfile(id).then((res) => {
        setSelectedRes(res.data.researcher);
        setResReports(res.data.accepted_reports);
      });
    },
    onSuccess: () => {
      console.log("تم جلب البيانات بنجاح");
    },
    onError: () => {
        toast.error("حدث خطأ ,اعد المحاولة ثانيةً");
    },
  });

  return { fetchResearcher, isLoading };
};

export default useFetchResearcher;
