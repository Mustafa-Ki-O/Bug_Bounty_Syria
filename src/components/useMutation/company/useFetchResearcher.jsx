import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { FetchResProfile } from "../../../api/copmany/FetchResProfile";
import { useNavigate } from "react-router-dom";

const useFetchResearcher = (setSelectedRes, setResReports) => {
  const navigate = useNavigate();
  
  const { mutate: fetchResearcher, isLoading } = useMutation({
    mutationFn: (id) => {
      return FetchResProfile(id).then((res) => {
        setSelectedRes(res.data['researcher-data']);
        setResReports(res.data.accepted_reports);
      });
    },
    onSuccess: () => {  
      console.log("تم جلب البيانات بنجاح");
    },
    onError: (err) => {
      if (err.response) {
        const { status } = err.response;
        console.log("Response status:", status);
        if (status === 500) {
          navigate('/server-error');
        } else if (status === 404) {
          navigate('/not-found');
        } 
        else if(status === 401){
          navigate('/unauthorized');
        } else if (err.request) {
          navigate('/network-error')
        }
      } else {
        toast.error('حدث خطأ ,اعد المحاولة ثانيةً')
      }
    },
  });

  return { fetchResearcher, isLoading };
};

export default useFetchResearcher;