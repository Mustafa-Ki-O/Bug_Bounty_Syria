import { useMutation } from "react-query";
import { LogOut } from "../../../api/researcher/logOut";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
    const navigate= useNavigate();
    const {mutate:logout , isLoading} = useMutation({
        mutationFn:() => LogOut(),
        onSuccess:() => {
            navigate('/login');
            localStorage.removeItem('researcher')
            console.log('تم تسجيل الخروج بنجاح')
        },
        onError : (err) => {
            console.log('ERROR', err);
            
        }
    })
  return {logout,isLoading}
}
export default useLogout