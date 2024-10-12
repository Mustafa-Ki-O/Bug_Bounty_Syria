import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { FetchReports } from "../../../api/researcher/fetchReports";

const useFetchReports = () => {
  const { mutate: fetchAllReports, isLoading } = useMutation({
    mutationFn: (setReports) =>
      FetchReports().then((res) => setReports(res.data.reports)),
    onSuccess: () => {
      console.log("تم جلب البيانات بنجاح");
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("حدث خطأ ما ,أعد المحاولة");
    },
  });
  return { fetchAllReports, isLoading };
};
export default useFetchReports;
