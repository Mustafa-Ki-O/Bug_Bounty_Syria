import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { deleteProduct } from "../../../api/copmany/deleteProduct";


const useDeleteProduct = (fetchData,setData) => {
    const { mutate : deletePro , isLoading } = useMutation({
        mutationFn:(formData) => deleteProduct(formData),
        onSuccess:() => {
            fetchData(setData);
            toast.success('تم حذف البرنامج بنجاح')
        },
        onError : (err) => {
            console.log('ERROR', err);
            toast.error('اعد المحاولة ')
            
        }
    })
  return {deletePro,isLoading}
}
export default useDeleteProduct