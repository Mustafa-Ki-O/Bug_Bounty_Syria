// import postUser from "../../api/postUser";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import CompanyValidation from "../../components/validation/CompanyValidation";

// const useCompany = () => {
//   const navigate = useNavigate();
//   const [check,setCheck] = useState(false);
//   const [errors,setErrors] =useState([]);
//   const [company,setCompany] = useState({
//     key:0,
//     name:'',
//     domain:'',
//     type:'',
//     numOfEmp:'',
//     email:'',
//     password:'',
//   })

//   const handleChnage = (event) => {
//     if (event.target) {
//       const { name, value } = event.target;
//       setCompany((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     } else {
//       setCompany((prev) => ({
//         ...prev,
//         type: event,
//       }));
//     }
//   }
     
//      const handleSubmit = (e) => {
//        e.preventDefault();
//        if(CompanyValidation(company,setErrors,check)){
//        console.log(company);
//        navigate('/login')
//        postUser(company);
//        setCompany({
//          key:0,
//          name:'',
//          domain:'',
//          type:'',
//          numOfEmp:'',
//          email:'',
//          password:'',
//        })
//        setCheck(false)
//       }
       
//      }
//      return {errors,check,company,handleChnage,handleSubmit,navigate,setCheck};

// }
// export default useCompany;