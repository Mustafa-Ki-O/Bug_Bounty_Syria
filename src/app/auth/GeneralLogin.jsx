import { Container, Stack, Flex, Button, Title, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Progress from "../../components/general/Progress";
import Login from "./Login";
import LoginCompany from "./LoginCompany";
import "../../assets/css/GeneralLogin.css";
const GeneralLogin = () => {
  const { t } = useTranslation();
  const [progress, setProgress] = useState(false);
  const [active, setActive] = useState("1");

  const handleClick = (index) => {
    setActive(index);
  };

  useEffect(() => {
    localStorage.clear();
  }, []);
  return (
    <>
      {progress && <Progress />}
      <Container mb={40} fluid w={{lg:'40%',md:'70%',sm:'90%',xs:'100%'}} p={30} m="auto">
        <Stack
          w={{ lg: "100%" }}
          m="auto"
          bg="#F9F9F9"
          p={30}
          style={{ borderRadius: 10, boxShadow: "0px 2px 6px 0 #000" }}
        >
          <Stack gap={10} my={10}>
            <Title order={2} c="1D1D1B">
              {t("Bug Bounty مرحبا بك في")}
            </Title>
            <Text size="md" color="#CDCDCD">
              {t("يرجى التسجيل للمتابعة")}
            </Text>
          </Stack>
          <Flex
            className="buttons"
            w="100%"
            gap="1.25rem"
            justify="center"
            m="auto"
            mb={10}
          >
            <Button
              fullWidth
              radius="15px 10px 10px 10px"
              size="md"
              style={{
                boxShadow: active === "0" ? "0 2px 4px 0 #b21222" : undefined,
              }}
              variant={active === "0" ? "filled" : "outline"}
              color="#B21222"
              onClick={() => handleClick("0")}
            >
              {t("الدخول كشركة")}
            </Button>
            <Button
              fullWidth
              radius="10px 15px 10px 10px"
              size="md"
              style={{
                boxShadow: active === "1" ? "0 2px 4px 0 #b21222" : undefined,
              }}
              variant={active === "1" ? "filled" : "outline"}
              color="#B21222"
              onClick={() => handleClick("1")}
            >
              {t("الدخول كباحث أمني")}
            </Button>
          </Flex>
          {active === "0" ? (
            <LoginCompany setProgress={setProgress} />
          ) : (
            <Login setProgress={setProgress} />
          )}
        </Stack>
      </Container>
    </>
  );
};
export default GeneralLogin;
