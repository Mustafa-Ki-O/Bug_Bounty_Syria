import { useMutation } from "react-query";
import { logOut } from "../../../api/copmany/logOut";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
    const navigate= useNavigate();
    const {mutate:logout , isLoading} = useMutation({
        mutationFn:() => logOut(),
        onSuccess:() => {
            navigate('/loginCompany');
            localStorage.removeItem('company')
            console.log('تم تسجيل الخروج بنجاح')
        },
        onError : (err) => {
            console.log('ERROR', err);
        }
    })
  return {logout,isLoading}
}
export default useLogout