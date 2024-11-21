import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { PostResearcher } from "../../../api/researcher/postResearcher";
import { useNavigate } from "react-router-dom";

const useReg = () => {
    const navigate = useNavigate();
    const {mutate:register ,isLoading: isLoading} = useMutation({
        mutationFn:(formData) => PostResearcher(formData),
        onSuccess:() => {
            toast.success("تم انشاء الحساب بنجاح")   
            navigate("/Bug_Bounty_Syria/checkcoderegister");   
        },
        onError : (err) => {
            console.log('ERROR', err);
            toast.error(err.message);
        }
    })
  return {register,isLoading}
}
export default useReg