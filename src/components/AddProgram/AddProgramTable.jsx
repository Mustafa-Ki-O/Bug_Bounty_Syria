import { Box, Button, Container, Table } from "@mantine/core";
import styles from "../../assets/css/addProgramTable.module.css";
import trash from "../../assets/vectors/trash.png";
import add from "../../assets/vectors/VectorAdd.png";
import AddProgramModal from "./AddProgramModal";
import { useDisclosure } from "@mantine/hooks";
import { useTranslation } from "react-i18next";
import useDeleteProduct from "../useMutation/company/useDeleteProduct";
import { useEffect } from "react";

function AddProgramTable({ data, fetchData,setData ,setProgress}) {
  const { t } = useTranslation();

  const [opened, { open, close }] = useDisclosure(false);

  const{deletePro,isLoading} = useDeleteProduct(fetchData,setData);
  const handleDelete = (uuid) => {
    const formData = new FormData();
    formData.append("uuid", uuid);
    deletePro(formData);
  };

  useEffect(()=>{
    setProgress(isLoading)
  },[isLoading])

  const rows = data.map((pro) => (
    <Table.Tr
      className={styles.tableRowPrograms}
      key={pro.nameProgram}
      h={65}
      c="#3D3C42"
      style={{ borderBottom: "none" }}
    >
      <Table.Td>{pro.title}</Table.Td>
      <Table.Td>{pro.url}</Table.Td>
      <Table.Td>
        {pro.description}{" "}
        <Button
          onClick={() => handleDelete(pro.uuid)}
          variant="transparent"
          mr={50}
        >
          <img src={trash} width={20} />
        </Button>{" "}
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <AddProgramModal opened={opened} close={close} setData={setData} fetchData={fetchData} setProgress={setProgress}/>
      <Container px={40} fluid>
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
              <Table.Th ta="center">{t("الوصف")}</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
        <Box m={30}>
          <Button variant="outline" color="#B21222" radius={8} onClick={open}>
            <img src={add} width={20} style={{ marginRight: "10px" }} />
            {t("اضافة برنامج جديد")}
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default AddProgramTable;
