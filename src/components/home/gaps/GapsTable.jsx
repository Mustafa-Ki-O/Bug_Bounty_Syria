import { Button, Table } from "@mantine/core";
import styles from "../../../assets/css/gapsTable.module.css";
import { useTranslation } from "react-i18next";
// import { FetchReports } from "../../../api/researcher/fetchReports";
import { useEffect, useState } from "react";
import useFetchReports from "../../useMutation/researcher/useFetchReports";

const GapsTable = ( {setProgress}) => {
  const { t } = useTranslation();
  const [reports,setReports] = useState([])
  const {fetchAllReports,isLoading} = useFetchReports(setReports)
  
  useEffect(() => {
    fetchAllReports(setReports);
  },[])

  useEffect(() => {
    setProgress(isLoading);
  }, [isLoading]);

  const rows = reports.map((pro) => (
    <Table.Tr
      className={styles.tableRowPrograms}
      key={pro.nameProgram}
      h={65}
      c="#3D3C42"
      style={{ borderBottom: "none" }}
    >
      <Table.Td>{pro.title}</Table.Td>
      <Table.Td>{pro.company_name}</Table.Td>
      <Table.Td>{pro.created_at}</Table.Td>
      <Table.Td>{pro.file}</Table.Td>
      <Table.Td>
        <Button
          variant="light"
          w={100}
          bg={
            pro.status === "Accept"
              ? "#16C09861"
              : pro.status === "Reject"
              ? "#FFC5C5"
              : "#58595B1A"
          }
          c={
            pro.status === "Accept"
              ? "#00B087"
              : pro.status === "Reject"
              ? "#DF0404"
              : "#58595B"
          }
          style={{
            border: `${
              pro.status === "Accept"
                ? "1px solid #00B087"
                : pro.status === "Reject"
                ? "1px solid #DF0404"
                : "1px solid #58595B"
            }`,
          }}
        >
          {pro.status}
        </Button>{" "}
      </Table.Td>
      <Table.Td>{pro.rate}/10</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table
      className={styles.tableProgram}
      h={363}
      ta="center"
      stickyHeaderOffset={60}
      style={{
        boxShadow: "0px 4px 4px 0px #00000040",
      }}
    >
      <Table.Thead h={65}>
        <Table.Tr c="#9CA3AF" ta="center">
          <Table.Th ta="center">{t("اسم الثغرة")}</Table.Th>
          <Table.Th ta="center">{t("اسم الشركة")}</Table.Th>
          <Table.Th ta="center">{t("تاريخ الارسال")}</Table.Th>
          <Table.Th ta="center">{t("ملف الثغرة")}</Table.Th>
          <Table.Th ta="center">{t("حالة الثغرة")}</Table.Th>
          <Table.Th ta="center">{t("تقييم الثغرة")}</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};

export default GapsTable;