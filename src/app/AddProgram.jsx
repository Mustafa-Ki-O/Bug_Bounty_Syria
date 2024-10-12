import { Container } from '@mantine/core'
import AddProgramTable from '../components/AddProgram/AddProgramTable'
import { useEffect, useState } from "react";
// import fetchProgramCompany from "../api/copmany/fetchProgramCompany";
import Progress from '../components/general/Progress';
import useFetchProgramCompany from '../components/useMutation/company/useFetchProgramCompany';

const AddProgram = () => {
  const [data, setData] = useState([]);
  const { fetchProgram, isLoading } = useFetchProgramCompany();
  const [progress, setProgress] = useState(false);

  useEffect(() => {
    fetchProgram(setData);
  }, []);

  useEffect(() => {
    setProgress(isLoading);
  }, [isLoading]);

    return(
        <>
        {progress && <Progress/>}
        <Container p={20} m={0} fluid my={10}>
           <AddProgramTable data={data} fetchData={fetchProgram} setData={setData} setProgress={setProgress}/>
        </Container>
        </>
    )

}
export default AddProgram