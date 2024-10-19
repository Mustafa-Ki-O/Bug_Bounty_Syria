import { useMutation } from "react-query";
import { fetchHomeCompany } from "../../../api/copmany/fetchHomeCompany";
import toast from "react-hot-toast";

const useFetchHome = (activePage) => {
    const {mutate:fetch ,isLoading: isLoadingCom} = useMutation({
        mutationFn:(setData) => fetchHomeCompany(activePage).then(res => setData(res.data)),
        onSuccess:() => {
            console.log('تم جلب البيانات بنجاح')     
        },
        onError : () => {
            toast.error("حدث خطأ ما ,أعد المحاولة")
    }
    })
  return {fetch,isLoadingCom}
}
export default useFetchHome