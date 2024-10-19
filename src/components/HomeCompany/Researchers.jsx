import { Text, Container, Grid } from "@mantine/core";
import ResearcherCard from "./ResearcherCard";
import { useTranslation } from "react-i18next";

const Researchers = ({ researchers }) => {
  const { t } = useTranslation();

  return (
    <>
      <Container fluid w="100%" p={50} pt={5}>
        <Text size="lg" fw={800} c="#1D1D1B" mb={20}>
          {t("الباحثين الأمنيين")}
        </Text>
        <Grid justify="center" gutter={25}>
          {researchers ? (
            researchers.map((res, index) => (
              <Grid.Col span={{ lg: 3, md: 4, sm: 6, xs: 12 }} key={index}>
                <ResearcherCard
                  id={res.uuid}
                  name={res.name}
                  points={res.points}
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
