import { Button, Flex, Group, Image, Stack, Text } from "@mantine/core";
import star from "../../assets/vectors/Vector (18).png";
import phoneImg from "../../assets/vectors/Vector3.png";
import badge from "../../assets/vectors/Vector (6).png";
import { useTranslation } from "react-i18next";

const InfoRes = ({ id, name, description, email, phone, image, points }) => {
  console.log(id);
  const { t } = useTranslation();

  return (
    <>
      <Stack h="95%" justify="space-between">
        <Group justify="space-between" align="center">
          <div>
            <img src={badge} width={15} />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: "20px", fontWeight: "bold" }}>
              {name}
            </span>
            <img
              src={image}
              width={70}
              height={70}
              style={{ borderRadius: "50%" }}
            />
          </div>
        </Group>
        <Text size="md" c="#000" ta="right">
          {description}
        </Text>
        <Flex gap={10} justify="flex-end" align="center">
          <Text>{points} /5</Text>
          <Image src={star} w={40} p={4} />
        </Flex>
        <Flex gap={30} justify="flex-end">
          <Button variant="outline" color="#b21222">
            <Image src={star} w={15} mx={8} />
            {t("تقييم الباحث")}
          </Button>
          <Button variant="filled" color="#b21222">
            <Image src={phoneImg} w={15} mx={8} />
            {t("تواصل مباشر")}
          </Button>
        </Flex>
      </Stack>
    </>
  );
};

export default InfoRes;
