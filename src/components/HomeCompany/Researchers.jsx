import { Text, Container, Grid } from "@mantine/core";
import ResearcherCard from "./ResearcherCard";
import { useTranslation } from "react-i18next";

const Researchers = ({researchers}) => {
  const { t } = useTranslation();


  return (
    <>
      <Container fluid w="100%" p={50} pt={5}>
        <Text size="md" fw={700} c="#1D1D1B" mb={20}>
          {t("الباحثين الأمنيين")}
        </Text>
        <Grid justify="center" gutter={25}>
          {researchers ? (
            researchers.map((res, index) => (
              <Grid.Col span={3} xs={4} md={4} mb={20} lg={4} key={index}>
                <ResearcherCard
                  name={res.name}
                  rate={res.rate}
                  description={res.description}
                  image={res.image}
                />
              </Grid.Col>
            ))
          ) : (
            <Text size="md">no Researchers</Text>
          )}
        </Grid>
      </Container>
    </>
  );
};
export default Researchers;