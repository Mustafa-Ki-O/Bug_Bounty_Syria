import { Button, Table } from "@mantine/core";
import styles from "../../assets/css/gapsTableCompany.module.css";
import iconButton from "../../assets/vectors/VectorButton.png";
import { useDisclosure } from "@mantine/hooks";
import TableCompanyModal from "./TableCompanyModal";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
// import { fetchReports } from "../../api/copmany/fetchReports";
import useFetchReports from "../useMutation/company/useFetchReports";

const GapsTableCompany = ({ setProgress }) => {
  const { t } = useTranslation();

  const [opened, { open, close }] = useDisclosure(false);
  const [dataCompany, setDataCompany] = useState([]);

  const { fetchAllReports, isLoading } = useFetchReports();

  useEffect(() => {
    fetchAllReports(setDataCompany);
  }, []);

  useEffect(() => {
    setProgress(isLoading);
  }, [isLoading]);

  const rows = dataCompany.map((pro) => (
    <Table.Tr
      className={styles.tableRowPrograms}
      key={pro.nameProgram}
      h={65}
      c="#3D3C42"
      style={{ borderBottom: "none" }}
    >
      <Table.Td>{pro.title}</Table.Td>
      <Table.Td>{pro.researcher.name}</Table.Td>
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
      <Table.Td>
        <Button variant="transparent" bd="none" onClick={open}>
          <img src={iconButton} width={20} />
        </Button>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <TableCompanyModal opened={opened} close={close} />
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
    </>
  );
};

export default GapsTableCompany;
