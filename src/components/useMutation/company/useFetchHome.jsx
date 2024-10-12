import { useMutation } from "react-query";
import { fetchHomeCompany } from "../../../api/copmany/fetchHomeCompany";
import toast from "react-hot-toast";

const useFetchHome = () => {
    const {mutate:fetch ,isLoading: isLoadingCom} = useMutation({
        mutationFn:(setData) => fetchHomeCompany().then(res => setData(res.data)),
        onSuccess:() => {
            console.log('تم جلب البيانات بنجاح')     
        },
        onError : (err) => {
            console.log('ERROR', err);
            toast.error("حدث خطأ ما ,أعد المحاولة")
        }
    })
  return {fetch,isLoadingCom}
}
export default useFetchHome