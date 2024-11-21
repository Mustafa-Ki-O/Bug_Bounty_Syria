import { Box, Button, Container, Table ,Image, Tooltip, Anchor} from "@mantine/core";
import styles from "../../assets/css/addProgramTable.module.css";
import trash from "../../assets/vectors/trash.png";
import add from "../../assets/vectors/VectorAdd.png";
import AddProgramModal from "./AddProgramModal";
import { useDisclosure } from "@mantine/hooks";
import { useTranslation } from "react-i18next";
import { useState} from "react";
import DeleteProductModal from "./DeleteModal";
import NoData from "../general/NoData";
function AddProgramTable({ fetchData,setData ,setProgress,products}) {
  const { t } = useTranslation();

  const [opened, { open, close }] = useDisclosure(false);
  
  const [show,setShow] = useState(false);
  const [productId,setProductId] = useState()

  const handleShowModal = (uuid) => {
    setProductId(uuid);
    setShow(true);
  };

  const rows = products && products.map((pro) => (
    <Table.Tr
      className={styles.tableRowPrograms}
      key={pro.nameProgram}
      h={65}
      c="#3D3C42"
      style={{ borderBottom: "none" }}
    >
      <Table.Td>{pro.title}</Table.Td>
      <Table.Td>
        <Tooltip label={pro.url} color="#b21222">
        <Anchor
        href={pro.url}
        target="_blank"
        c="#b21222"
        bg='transpernet'>
         {t('ملف البرنامج')}
        </Anchor>
        </Tooltip>
        </Table.Td>
      <Table.Td>
        {pro.description}
        </Table.Td>
        <Table.Td>
        <Button
          onClick={() => handleShowModal(pro.uuid)}
          variant="transparent"
        >
          <Image src={trash} w={20} />
        </Button>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
    <DeleteProductModal 
    productId={productId}
    opened={show}
    setShow={setShow}
    fetchData={fetchData}
    setData={setData}
    setProgress={setProgress}
    />
      <AddProgramModal opened={opened} close={close} setData={setData} fetchData={fetchData} setProgress={setProgress}/>
      <Container px={40} fluid>
          <>
          {products && products.length > 0 ? (
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
            <Table.Tr c="#B21222" ta="center">
              <Table.Th ta="center">{t("اسم البرنامج")}</Table.Th>
              <Table.Th ta="center">{t("رابط البرنامج")}</Table.Th>
              <Table.Th ta="center" >{t("الوصف")}</Table.Th>
              <Table.Th ta="center"></Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
         ):(<NoData/>)} 
        <Box m={30}>
          <Button variant="outline" color="#B21222" radius={8} onClick={open}>
            <img src={add} width={20} style={{ marginRight: "10px" }} />
            {t("اضافة برنامج جديد")}
          </Button>
        </Box>
        </>

      </Container>
    </>
  );
}

export default AddProgramTable;
