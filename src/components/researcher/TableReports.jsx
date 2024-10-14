import { Table } from "@mantine/core";
import styles from "../../assets/css/tablePrograms.module.css";
import { useTranslation } from "react-i18next";

function TableReports({ data }) {

  const { t } = useTranslation();

  const rows =  data.map((rep) => (
    <Table.Tr
      className={styles.tableRowPrograms}
      key={rep.uuid}
      h={65}
      c="#3D3C42"
      style={{ borderBottom: "none" }}
    >
      <Table.Td>{rep.title}</Table.Td>
      <Table.Td>{rep.created_at}</Table.Td>
      <Table.Td>{rep.status}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
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
          <Table.Th ta="center">{t("تاريخ الارسال")}</Table.Th>
          <Table.Th ta="center">{t("الحالة")}</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody bg="#FFFFFF">{rows}</Table.Tbody>
    </Table>
    </>
  );
}

export default TableReports;