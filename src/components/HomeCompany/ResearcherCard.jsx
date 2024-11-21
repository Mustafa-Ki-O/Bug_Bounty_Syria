import { Card, Image, Text, Button, Group, Stack } from "@mantine/core";
import star from "../../assets/vectors/star.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const ResearcherCard = ({ id, name, points, description, image }) => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      bg="#F9F9F9"
      withBorder
      style={{ boxShadow: "0 2px 8px 0 #000" }}
    >
      <Stack mih={300} justify="space-between">
        <Group justify="flex-end">
          <Text size="md">{name}</Text>
          <Image
            src={image}
            w={50}
            h={50}
            radius="50%"
            style={{ filter: "drop-shadow(0px 1px 2px #000)" }}
          />
        </Group>
        <Group justify="flex-end"  gap={3} >
          <Text size="lg" c="#9C9C9C" mt={4}>
            {points}
          </Text>
          <Image src={star} w={20} />
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
          onClick={() => navigate(`/Bug_Bounty_Syria/researcher/${id}`)}
        >
          {t("قراءة المزيد")}
        </Button>
      </Stack>
    </Card>
  );
};
export default ResearcherCard;
