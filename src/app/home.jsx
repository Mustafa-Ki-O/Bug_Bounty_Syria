import { Container, Stack } from "@mantine/core";
import Header from "../components/home/Header.jsx";
import List from "../components/home/List.jsx";
import "../assets/css/home.module.css";
import { useState, useEffect } from "react";
import Diagrams from "../components/HomeCompany/Diagrams.jsx";
import Researchers from "../components/HomeCompany/Researchers.jsx";
import useFetchHome from "../components/useMutation/company/useFetchHome.jsx";
import useFetchHomeResearcher from "../components/useMutation/researcher/useFetchHomeResearcher.jsx";
import Progress from "../components/general/Progress.jsx";
import Search from "../components/HomeCompany/Search.jsx";
import PaginationTable from "../components/general/PaginationTable.jsx";
import ToTop from "../components/general/ToTop.jsx";

const Home = () => {
  const company = localStorage.getItem("company");
  const [progress, setProgress] = useState(false);
  const [activePage,setActivePage] = useState(1);
  const [totalPages,setTotalPages] = useState();
  const { fetch, isLoadingCom } = useFetchHome(activePage);
  const [data, setData] = useState([]);
  const [companies, setCompanies] = useState([]);
  const { fetchResearcher, isLoading } = useFetchHomeResearcher();
  const [researchers, setResearchers] = useState([]);
 
 

  useEffect(() => {
    if (company) {
      fetch(setData);
    } else {
      fetchResearcher(setCompanies);
    }
  }, [activePage]);

  useEffect(() => {
    if (data) {
      setResearchers(data.researchers);
      setTotalPages(data.total_pages)
    }
  }, [data,activePage]);

  useEffect(() => {
    setProgress(isLoadingCom || isLoading);
  }, [isLoadingCom || isLoading]);

  
  const [filteredResearchers, setFilterdResearchers] = useState([]);

  return (
    <>
    <ToTop/>
      {progress && <Progress />}
      {company ? (
        <Container p={20} fluid mih="100vh">
          <Diagrams data={data} />
          <Search
            researchers={researchers}
            setFilteredResearchers = {setFilterdResearchers}
          />
          <Researchers researchers={filteredResearchers} />
          <PaginationTable totalPages={totalPages} setActivePage={setActivePage} activePage={activePage}/>
        </Container>
      ) : (
        <Stack h="auto" p={20} style={{ rowGap: 40 }}>
          <Header setCompanies={setCompanies} />
          <List companies={companies} />
        </Stack>
      )}
    </>
  );
};
export default Home;
