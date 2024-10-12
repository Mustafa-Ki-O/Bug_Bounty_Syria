const CompanyValidation = (company,setErrors,check) => {
    const newErrors={};

        if(!company.name || !company.name.split('').every((e)=>isNaN(e))){
             newErrors.name='Invalid Name  " Name without spaces or numbers " ';
        }

        if (!company.email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(company.email)) {
            newErrors.email = 'Invalid Email " syntax is like : name@exapmle.com " '
       }
       if (!company.domain || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})*$/.test(company.domain)) {
        newErrors.domain = 'Invalid domain'
    }
  
      if (!company.type) {
           newErrors.type= 'Invalid type " '
      }
  
      if (!company.password ) {
           newErrors.password = 'Invalid Password '
      }
      
      if (!company.numOfEmp || isNaN(company.numOfEmp) || company.numOfEmp <1) {
        newErrors.numOfEmp = 'Invalid number '
   }
    if (check!== true){
     newErrors.check = 'you should accept the terms !'
    }
  
        setErrors(newErrors)
  
        return Object.keys(newErrors).length === 0;

}
export default CompanyValidation