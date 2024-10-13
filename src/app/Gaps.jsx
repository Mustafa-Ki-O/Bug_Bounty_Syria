import { Box, Container } from "@mantine/core";
import GapsTable from "../components/home/gaps/GapsTable";
import OurSlider from "../components/home/gaps/Slider";
import GapsTableCompany from "../components/gapsCompany/GapsTableCompany";
import Progress from "../components/general/Progress";
import { useState } from "react";

const Gaps = () => {
  const [progress, setProgress] = useState(false);
  const company = localStorage.getItem("company");
  return (
    <>
      {progress && <Progress />}
      <Container fluid p={50}>
        {company ? (
          <GapsTableCompany setProgress={setProgress} />
        ) : (
          <GapsTable setProgress={setProgress} />
        )}
        <Box my={30} style={{ display: "flex", justifyContent: "end" }}>
          <OurSlider />
        </Box>
      </Container>
    </>
  );
};

export default Gaps;
