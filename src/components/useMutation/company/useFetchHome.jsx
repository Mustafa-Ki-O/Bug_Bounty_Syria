import { useMutation } from "react-query";
import { fetchHomeCompany } from "../../../api/copmany/fetchHomeCompany";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useFetchHome = (activePage) => {
    const navigate = useNavigate()
    const {mutate:fetch ,isLoading: isLoadingCom} = useMutation({
        mutationFn:(setData) => fetchHomeCompany(activePage).then(res => setData(res.data)),
        onSuccess:() => {
            console.log('تم جلب البيانات بنجاح')     
        },
        onError : (err) => {
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
              } 
              else {
            toast.error("حدث خطأ ما ,أعد المحاولة")
        }
    }
    })
  return {fetch,isLoadingCom}
}
export default useFetchHome