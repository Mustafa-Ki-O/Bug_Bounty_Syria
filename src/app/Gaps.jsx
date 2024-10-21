import { Container } from "@mantine/core";
import GapsTable from "../components/home/gaps/GapsTable";
// import OurSlider from "../components/home/gaps/Slider";
import GapsTableCompany from "../components/gapsCompany/GapsTableCompany";
import Progress from "../components/general/Progress";
import { useState,useEffect } from "react";
import PaginationTable from "../components/general/PaginationTable";
import useFetchReports from "../components/useMutation/researcher/useFetchReports";
import ToTop from "../components/general/ToTop";

const Gaps = () => {
  const [progress, setProgress] = useState(false);
  const company = localStorage.getItem("company");
  const [activePage,setActivePage] = useState(1);
  const [data,setData] = useState({})
  const [reports,setReports] = useState([])
  const {fetchAllReports,isLoading} = useFetchReports(activePage)
  const [totalPages,setTotalPages] = useState();
  
  useEffect(() => {
    if(!company){
    fetchAllReports(setData);
    }
  },[activePage])

  useEffect(()=>{
    if(data){
      setReports(data.researchers);
      setTotalPages(data.total_pages);
    }
  },[data,activePage])

  useEffect(() => {
    setProgress(isLoading);
  }, [isLoading]);
  
  
  return (
    <>
      {progress && <Progress />}
      <ToTop/>
        {company ? (
          <Container fluid p={50}>
             <GapsTableCompany setProgress={setProgress} />
          </Container>
        ) : (
          <Container fluid p={50}>
          <GapsTable  reports={reports}/>
          <PaginationTable totalPages={totalPages} 
          activePage={activePage} 
          setActivePage={setActivePage}/>
        </Container>
        )} 
    </>
  );
};

export default Gaps;
