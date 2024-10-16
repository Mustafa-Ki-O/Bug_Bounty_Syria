import { Stack, Container } from "@mantine/core";
import Body from "../../components/register/Body";
import Progress from '../../components/general/Progress'
import { useState } from "react";
const Register = () => {

  const[progress,setProgress] = useState(false)
  return (
 <>
 {progress && <Progress/>}
    <Container fluid m={0} p={0}>
      <Stack>
        <Body setProgress={setProgress}/>
      </Stack>
    </Container>
    </>
  );
};
export default Register;
