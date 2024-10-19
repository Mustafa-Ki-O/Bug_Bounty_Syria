import { Button, Image, Table ,Anchor, Tooltip, Box} from "@mantine/core";
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
  const[reports,setReports] = useState([])
  const { fetchAllReports, isLoading } = useFetchReports(1);
  const [productId, setProductId] = useState();
  const [reportRate,setReportRate] = useState();

  useEffect(() => {
    fetchAllReports(setDataCompany);
  }, []);

  useEffect(()=>{
    if(dataCompany){
      setReports(dataCompany.reports)
    }
  },[dataCompany])

  useEffect(() => {
    setProgress(isLoading);
  }, [isLoading]);

  const rows = reports && reports.map((pro) => (
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
      <Table.Td visibleFrom="md">
        <Tooltip label={t(`${pro.file}`)} bg='#b21222'> 
        <Anchor
            href={pro.file}
            target="_blank"
            inherit
            td='underline'
            c='#b21222'
            justify="end"
            style={{ color: "black", marginRight: "10px" }}
          >
            قراءة ملف الثغرة
          </Anchor>
          </Tooltip>
      </Table.Td>
      <Table.Td style={{placeItems:'center'}}>
        <Box
          w={100}
          p={10}
          bg={
            pro.status === "accept"
              ? "#16C09861"
              : pro.status === "reject"
              ? "#FFC5C5"
              : "#58595B1A"
          }
          c={
            pro.status === "accept"
              ? "#00B087"
              : pro.status === "reject"
              ? "#DF0404"
              : "#58595B"
          }
          style={{
            border: `${
              pro.status === "accept"
                ? "1px solid #00B087"
                : pro.status === "reject"
                ? "1px solid #DF0404"
                : "1px solid #58595B"
            }`, borderRadius:5
          }}
        >
          {pro.status}
        </Box>{" "}
      </Table.Td>
      <Table.Td>
        <Button variant="transparent" bd="none" onClick={()=>{
          open();
          setProductId(pro.uuid);
          setReportRate(pro.rate);
        }}>
          <Image src={iconButton} w={20} />
        </Button>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <TableCompanyModal reportRate={reportRate} uuid={productId} opened={opened} close={close} setProgress={setProgress}/>
      <Table
        className={styles.tableProgram}
        ta="center"
        h={300}
        stickyHeaderOffset={60}
        style={{
          boxShadow: "0px 4px 4px 0px #00000040",
        }}
      >
        <Table.Thead h={65}>
          <Table.Tr c="#9CA3AF" ta="center">
            <Table.Th ta="center">{t("اسم الثغرة")}</Table.Th>
            <Table.Th ta="center">{t("اسم الشركة")}</Table.Th>
            <Table.Th ta="center" visibleFrom="md">{t("تاريخ الارسال")}</Table.Th>
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
