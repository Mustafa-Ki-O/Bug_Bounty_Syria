import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { FetchCompanyProfile } from "../../../api/researcher/fetchCompanyProfile";

const useFetchCompany = (setSelectedCompany, setCompanyPrograms) => {
  const { mutate: fetchCompany, isLoading } = useMutation({
    mutationFn: (id) => {
        FetchCompanyProfile(id).then((res)=>{
            setSelectedCompany(res.data['company-data'])
            setCompanyPrograms(res.data['company-data'].products)
        })
      FetchCompanyProfile(id).then((res) => {
        setSelectedCompany(res.data["company-data"]);
        setCompanyPrograms(res.data["company-data"].products);
      });
    },
    onSuccess: () => {
      console.log("تم جلب البيانات بنجاح");
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("لم يتم جلب البيانات");
    },
  });
  return { fetchCompany, isLoading };
};
export default useFetchCompany;
