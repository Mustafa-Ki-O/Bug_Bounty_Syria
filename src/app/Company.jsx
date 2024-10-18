import { useParams } from "react-router-dom";
import CompanyPrograms from "../components/company/CompanyPrograms";
import SelectedCompany from "../components/company/SelectedCopmany";
import { Stack } from "@mantine/core";
import { useEffect, useState } from "react";
import useFetchCompany from "../components/useMutation/researcher/useFetchCompany";
import Progress from "../components/general/Progress";
const Company = () => {
  const { id } = useParams();
  const [progress, setProgress] = useState(false);
  const [companyPrograms, setCompanyPrograms] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState({});

  const { fetchCompany, isLoading } = useFetchCompany(
    setSelectedCompany,
    setCompanyPrograms
  );
  console.log(selectedCompany);
  useEffect(() => {
    fetchCompany(id);
  }, []);

  useEffect(() => {
    setProgress(isLoading);
  }, [isLoading]);

  return (
    <>
      {progress && <Progress />}
      <Stack p={20}>
        <SelectedCompany selectedCompany={selectedCompany} />
        <CompanyPrograms
          companyPrograms={companyPrograms}
          setProgress={setProgress}
        />
      </Stack>
    </>
  );
};
export default Company;
