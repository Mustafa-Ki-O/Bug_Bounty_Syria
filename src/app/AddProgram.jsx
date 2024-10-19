import { Container } from '@mantine/core'
import AddProgramTable from '../components/AddProgram/AddProgramTable'
import { useEffect, useState } from "react";
// import fetchProgramCompany from "../api/copmany/fetchProgramCompany";
import Progress from '../components/general/Progress';
import useFetchProgramCompany from '../components/useMutation/company/useFetchProgramCompany';
import PaginationTable from '../components/AddProgram/PaginationTable';

const AddProgram = () => {
  const [data, setData] = useState([]);
  const [progress, setProgress] = useState(false);
  const [activePage,setActivePage] = useState(1);
  const [totalPages,setTotalPages] = useState();
  const { fetchProgram, isLoading } = useFetchProgramCompany(activePage);
  const [products,setProducts] = useState([]);

  useEffect(() => {
    fetchProgram(setData);
  }, [activePage]);

  useEffect(()=>{
    if(data){
      setProducts(data.products)
      setTotalPages(data.total_pages)
    }
  },[data,activePage])

  useEffect(() => {
    setProgress(isLoading);
  }, [isLoading]);

    return(
        <>
        
        {progress && <Progress/>}
        <Container p={20} m={0} fluid my={10}>
           <AddProgramTable products={products} fetchData={fetchProgram} setData={setData} setProducts={setProducts} setProgress={setProgress}/>
           <PaginationTable totalPages={totalPages} setActivePage={setActivePage} activePage={activePage}/>
        </Container>
        </>
    )

}
export default AddProgram