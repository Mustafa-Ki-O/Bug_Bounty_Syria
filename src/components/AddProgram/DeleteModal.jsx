import { Button, Flex, Modal,Stack,Text, Title } from "@mantine/core"
import { useTranslation } from "react-i18next";
import useDeleteProduct from "../useMutation/company/useDeleteProduct";
import { useEffect } from "react";

const DeleteProductModal = ({productId,opened,setShow,fetchData,setData,setProgress}) => {
    const { t } = useTranslation();
    const{deletePro,isLoading} = useDeleteProduct(fetchData,setData);
    
    const handleDelete =() => {
        const formData = new FormData();
        formData.append("uuid", productId);
        deletePro(formData);
        setShow(false)
    }

    useEffect(()=>{
        setProgress(isLoading)
    },[isLoading])

    return(
        <>
         <Modal
        w="100%"
        radius={20}
        opened={opened}
        onClose={close}
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 2,
        }}
        style={{ position: "absolute", right: 0 }}
      >
        <Stack pb={50} dir="rtl" className="modal" w="70%" m="auto" gap={15}>
          <Title order={3} fw={900} ta="center">
            {t('حذف البرنامج')}
          </Title>
          <Text size="md" fw={700} c="#1D1D1B55" ta="center">
            {t('هل انت متأكد من حذف هذا البرنامج ؟')}
          </Text>
          <Flex gap={30} mt={30} w='100%' justify='space-between'>
           <Button size="md" radius={10} fullWidth variant="filled" color="#b21222" onClick={handleDelete}>
            {t('حذف')}
           </Button>
           <Button size="md" radius={10} fullWidth variant="outline" color="#b21222" onClick={close}>
            {t('تراجع')}
           </Button>
          </Flex>
        </Stack>
      </Modal>
        </>
    )


}
export default DeleteProductModal