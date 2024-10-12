import { useMutation } from "react-query";
import addProduct from "../../../api/copmany/addProdoct";
import toast from "react-hot-toast";
// import fetchProgramCompany from "../../../api/copmany/fetchProgramCompany";
// import FetchData from "../../AddProgram/FetchData";

const useAddProduct = (fetchData,setData) => {
    const {mutate:addPro , isLoading} = useMutation({
        mutationFn:(product) => addProduct(product),
        onSuccess:() => {  
            fetchData(setData);
            toast.success('تمت اضافة البرنامج بنحاج')
        },
        onError : (err) => {
            console.log('ERROR', err);
            toast.error("حدث خطأ ما ,أعد المحاولة")
        }
    })
  return {addPro,isLoading}
}
export default useAddProduct