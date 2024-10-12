// import postUser from "../../api/postUser";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import ResearcherValidation from "../../components/validation/ResearcherValidation";

// const useResearcher = () => {

//     const navigate = useNavigate();
//     const [errors,setErrors] = useState([]);
//     const[check,setCheck] = useState(false);
    
//     const [researcher,setResearcher] = useState({
//         key:1,
//         name:'',
//         email:'',
//         phone:'',
//         password:'',
//         code:'',
//       })
  
//       const handleChnage = (event) => {
//          const{name,value} = event.target;
//          setResearcher((prev) => ({
//           ...prev,
//           [name]:value,
//          }))
//       }
      
//       const handleSubmit = (e) => {
//         e.preventDefault();
//         if(ResearcherValidation(researcher,setErrors,check)){
//         console.log(researcher)
//         postUser(researcher);
//         navigate('/login')
//         setResearcher({
//            key:1,
//            name:'',
//            email:'',
//            phone:'',
//            password:'',
//            code:'',
//         })
//         setCheck(false)
//       }
//       }
//       return {researcher,check,errors,navigate,setCheck,handleChnage,handleSubmit}
// }
// export default useResearcher;