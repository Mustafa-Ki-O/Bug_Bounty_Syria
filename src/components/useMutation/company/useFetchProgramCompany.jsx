import { useMutation } from "react-query";
import toast from "react-hot-toast";
import fetchProgramCompany from "../../../api/copmany/fetchProgramCompany";

const useFetchProgramCompany = () => {
  const { mutate: fetchProgram, isLoading } = useMutation({
    mutationFn: (setData) =>
      fetchProgramCompany().then((res) => setData(res.data.products)),
    onSuccess: () => {
      console.log("تم جلب البرامج بنجاح");
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("حدث خطأ ما ,أعد المحاولة");
    },
  });
  return { fetchProgram, isLoading };
};
export default useFetchProgramCompany;
