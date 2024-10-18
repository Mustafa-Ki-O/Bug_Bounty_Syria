import { Card, Image, Text, Button, Group, Stack } from "@mantine/core";
import star from "../../assets/vectors/star.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "../../assets/css/researcherCard.css";
const ResearcherCard = ({ id, name, rate, description, image }) => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  return (
    <Card
      className="card"
      shadow="sm"
      padding="lg"
      radius="md"
      bg="#F9F9F9"
      withBorder
      style={{ boxShadow: "0 4px 8px #000" }}
    >
      <Stack mih={300} justify="space-between">
        <Group justify="flex-end">
          <Text size="md">{name}</Text>
          <Image
            src={image}
            w={40}
            h={40}
            radius="50%"
            style={{ filter: "drop-shadow(0px 1px 2px #000)" }}
          />
        </Group>
        <Group justify="flex-end" gap={3}>
          <Text size="sm" c="#9C9C9C">
            {rate}
          </Text>
          <Image src={star} w={15} />
        </Group>
        <Text size="sm" lineClamp={5} ta="end">
          {description}
        </Text>

        <Button
          color="#B21222"
          variant="outline"
          fullWidth
          radius="md"
          align="flex-end"
          fw={800}
          onClick={() => navigate(`/researcher/${id}`)}
        >
          {t("قراءة المزيد")}
        </Button>
      </Stack>
    </Card>
  );
};
export default ResearcherCard;
