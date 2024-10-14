import { Container, Button, Grid, GridCol, Select } from "@mantine/core";
import Header from "./Header";
import { useState } from "react";
import ResearcherForm from "./form/ResearcherForm";
import CompanyForm from "./form/CompanyForm";
import { useTranslation } from "react-i18next";

const Body = () => {
  const { t } = useTranslation();

  const [active, setActive] = useState("1");

  const handleClick = (index) => {
    setActive(index);
  };

  return (
    <Container
      style={{
        margin: "auto",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        padding: 50,
        boxSizing: "border-box",
        gap: 15,
      }}
    >
      <Container
        fluid
        style={{
          backgroundColor: "#F9F9F9",
          borderRadius: 6,
          padding: 30,
          boxShadow: "0px 2px 7px #000",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <Grid visibleFrom="md">
          <GridCol span={6} mt={30}>
            <Button
              fullWidth
              variant={active === "0" ? "filled" : "outline"}
              color="#B21222"
              onClick={() => handleClick("0")}
            >
              {t("التسجيل كشركة جديدة")}
            </Button>
          </GridCol>
          <GridCol span={6} mt={30}>
            <Button
              fullWidth
              variant={active === "1" ? "filled" : "outline"}
              color="#B21222"
              onClick={() => handleClick("1")}
            >
              {t("التسجيل كباحث أمني")}
            </Button>
          </GridCol>
        </Grid>
        <Grid my={15} hiddenFrom="md">
          <GridCol span={12} dir="rtl">
            <Select
              dir="rtl"
              checkIconPosition="right"
              value={active}
              onChange={(value) => handleClick(value)}
              data={[
                { value: "0", label: t("التسجيل كشركة جديدة") },
                { value: "1", label: t("التسجيل كباحث أمني") },
              ]}
            />
          </GridCol>
        </Grid>
        {active === "0" ? <CompanyForm /> : <ResearcherForm />}
      </Container>
    </Container>
  );
};

export default Body;
