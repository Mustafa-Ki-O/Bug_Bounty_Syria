const ResearcherValidation = (researcher,setErrors,check) => {
    const newErrors={};

        if(!researcher.name || !researcher.name.split('').every((e)=>isNaN(e))){
             newErrors.name='Invalid Name  " Name without spaces or numbers " ';
        }

        if (!researcher.email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(researcher.email)) {
            newErrors.email = 'Invalid Email " syntax is like : name@exapmle.com " '
       }
  
      if (!researcher.phone ||researcher.phone.length > 10 || isNaN(researcher.phone)) {
           newErrors.phone = 'Invalid Phone Number " Phone number length not less than 10 digits " '
      }
  
      if (!researcher.password ) {
           newErrors.password = 'Invalid Password '
      }
      
      if (!researcher.code || researcher.code.length !== 3) {
        newErrors.code = 'Invalid Code '
   }
    if (check!== true){
     newErrors.check = 'you should accept the terms !'
    }
  
        setErrors(newErrors)
  
        return Object.keys(newErrors).length === 0;

}
export default ResearcherValidation