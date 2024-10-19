import { DonutChart } from "@mantine/charts";
import { Box, Divider, Flex, Group, Text } from "@mantine/core";
import { useTranslation } from "react-i18next";

const Diagrams = ({ data }) => {
  const { t } = useTranslation();

  const accept = data["count_accept"];
  const pendings = data["count_pending"];
  const acceptPercent = data["count_accept_percent"];
  const pendingPercent = data["count_pending_percent"];

  const numBugs = accept + pendings;

  return (
    <Box
      p={20}
      bg="#fff"
      m="auto"
      mb={20}
      w={300}
      style={{ borderRadius: 10, boxShadow: "0 2px 5px #000" }}
    >
      <Group align="flex-end" gap={2} style={{ flexDirection: "column" }}>
        <Text size="md" c="#000">
          {t("إحصائية الثغرات")}
        </Text>
        <Text size="sm" c="#9C9C9C">
          {" "}
          {t("ثغرات")} {numBugs}
        </Text>
      </Group>
      <Divider my={5} c="#000" />
      <DonutChart
        m="auto"
        my={15}
        paddingAngle={4}
        size={140}
        thickness={34}
        data={[
          { name: "Accept", value: accept, color: "#00bf00" },
          { name: "Pending", value: pendings, color: "#b21222" },
        ]}
      />
      <Flex justify="space-between" align="center" p={10}>
        <Text
          size="md"
          c="#000"
          display="flex"
          style={{ alignItems: "center", gap: 6 }}
        >
          <span
            style={{
              display: "flex",
              width: 6,
              height: 3,
              backgroundColor: "green",
            }}
          ></span>
          {acceptPercent}% Accept
        </Text>
        <Text
          size="md"
          c="#000"
          display="flex"
          style={{ alignItems: "center", gap: 6 }}
        >
          <span
            style={{
              display: "flex",
              width: 6,
              height: 3,
              backgroundColor: "red",
            }}
          ></span>
          {pendingPercent}% Not accept
        </Text>
      </Flex>
    </Box>
  );
};

export default Diagrams;
