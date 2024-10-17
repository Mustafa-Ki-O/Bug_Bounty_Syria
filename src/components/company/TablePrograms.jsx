import { Table, Button } from "@mantine/core";
import styles from "../../assets/css/tablePrograms.module.css";
import up from "../../assets/vectors/navigation-up.png";
import { useTranslation } from "react-i18next";
import SendReportModal from "./SendReportModal";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

function TablePrograms({ data, setProgress }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [productId, setProductId] = useState();
  const { t } = useTranslation();

  const rows = data.map((pro) => (
    <Table.Tr
      className={styles.tableRowPrograms}
      key={pro.uuid}
      h={65}
      c="#3D3C42"
      style={{ borderBottom: "none" }}
    >
      <Table.Td>{pro.title}</Table.Td>
      <Table.Td>{pro.url}</Table.Td>
      <Table.Td>{pro.description}</Table.Td>
      <Table.Td>
        <Button
          color="#B21222"
          ml={10}
          variant="outline"
          fw={700}
          dir="ltr"
          onClick={() => {
            open();
            setProductId(pro.uuid);
          }}
        >
          <img src={up} width={20} style={{ marginRight: "5px" }} />
          {t("رفع التقرير")}
        </Button>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <SendReportModal
        setProgress={setProgress}
        opened={opened}
        close={close}
        uuid={productId}
      />
      <Table
        className={styles.tableProgram}
        h={363}
        ta="center"
        stickyHeader
        stickyHeaderOffset={60}
        style={{
          boxShadow: "0px 4px 4px 0px #00000040",
        }}
      >
        <Table.Thead bg="#FFFFFF" h={65}>
          <Table.Tr c="#B21222" ta="center">
            <Table.Th ta="center">{t("اسم البرنامج")}</Table.Th>
            <Table.Th ta="center">{t("رابط البرنامج")}</Table.Th>
            <Table.Th ta="center">{t("الوصف")}</Table.Th>
            <Table.Th ta="center">{t("رفع التقرير")}</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody bg="#FFFFFF">{rows}</Table.Tbody>
      </Table>
    </>
  );
}

export default TablePrograms;
