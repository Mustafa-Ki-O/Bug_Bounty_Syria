import { Container, Stack } from "@mantine/core";
import Header from "../components/home/Header.jsx";
import List from "../components/home/List.jsx";
import "../assets/css/home.module.css";
import { useState, useEffect } from "react";
import Diagrams from "../components/HomeCompany/Diagrams.jsx";
import Researchers from "../components/HomeCompany/Researchers.jsx";
// import { FetchHome } from '../api/researcher/fetchHome.jsx';
import useFetchHome from "../components/useMutation/company/useFetchHome.jsx";
import useFetchHomeResearcher from "../components/useMutation/researcher/useFetchHomeResearcher.jsx";
import Progress from "../components/general/Progress.jsx";

const Home = () => {
  const company = localStorage.getItem("company");
  const [progress, setProgress] = useState(false);
  const { fetch, isLoadingCom } = useFetchHome();
  const [data, setData] = useState([]);
  const [companies, setCompanies] = useState([]);
  const { fetchResearcher, isLoading } = useFetchHomeResearcher();

  useEffect(() => {
    if (company) {
      fetch(setData);
    } else {
      fetchResearcher(setCompanies);
    }
  }, []);

  useEffect(() => {
    setProgress(isLoadingCom || isLoading);
  }, [isLoadingCom || isLoading]);

  const researchers = data.researcher;

  console.log("test Git");
  console.log("test Git");
  console.log("test Git");
  console.log("test Git");
  console.log("test Git");
  console.log("test Git");
  console.log('musatfa')
  console.log('husin')
  console.log('hasan')
  console.log('heaven')
  return (
    <>
      {progress && <Progress />}
      {company ? (
        <Container p={20} fluid>
          <Diagrams data={data} />
          <Researchers researchers={researchers} />
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
