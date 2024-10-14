import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { FetchResProfile } from "../../../api/copmany/FetchResProfile";
const useFetchResearcher = (setSelectedRes,setResReports) => {
  const { mutate: fetchResearcher, isLoading } = useMutation({
    mutationFn: (id) => {
        FetchResProfile(id).then((res)=>{
            setSelectedRes(res.data.researcher)
            setResReports(res.data.accepted_reports)
        })
    },
    onSuccess: () => {  
      console.log("تم جلب البيانات بنجاح");
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("لم يتم جلب البيانات");
    },
  });
  return { fetchResearcher, isLoading};
};
export default useFetchResearcher;
