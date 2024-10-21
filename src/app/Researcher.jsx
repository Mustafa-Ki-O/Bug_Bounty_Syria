import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useFetchResearcher from "../components/useMutation/company/useFetchResearcher";
import Progress from "../components/general/Progress";
import { Stack } from "@mantine/core";
import SelectedRes from "../components/researcher/SelectedRes";
import Reports from "../components/researcher/Reports";
import ToTop from "../components/general/ToTop";

const Researcher = () => {
  const { id } = useParams();
  const [progress, setProgress] = useState(false);
  const [selectedRes, setSelectedRes] = useState({});
  const [resReports, setResReports] = useState([]);

  const { fetchResearcher, isLoading } = useFetchResearcher(
    setSelectedRes,
    setResReports
  );

  useEffect(() => {
    fetchResearcher(id);
  }, []);

  useEffect(() => {
    setProgress(isLoading);
  }, [isLoading]);

  
  return (
    <>
    <ToTop/>
      {progress && <Progress />}
      <Stack p={20}>
        <SelectedRes selectedRes={selectedRes} />
        <Reports resReports={resReports} />
      </Stack>
    </>
  );
};
export default Researcher;
