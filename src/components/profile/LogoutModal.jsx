import { Modal, Text, Stack, Flex, Button } from "@mantine/core";
import { useTranslation } from 'react-i18next';
import useLogout from '../useMutation/researcher/useLogout.jsx'
import { useState,useEffect } from "react";

const LogoutModal = ({ openLogout, setOpenLogout, setProgress }) => {

  const { t } = useTranslation();
  const [isSubmitted,setIsSubmitted] = useState(false);
  const {logout,isLoading} = useLogout();

  const handleLogout = () => {
    logout();
    setIsSubmitted(true);
}
  useEffect(() => {
   if(isSubmitted){
    setProgress(isLoading)
   }
  },[isLoading])

  return (
    <>
      <Modal w='100%' radius={20} opened={openLogout}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 2,
        }} onClose={() => setOpenLogout(false)} centered style={{ position: 'absolute', right: 0 }}>
        <Stack pb={40} w='70%' m='auto' gap={25}>
          <Text size="lg" fw={900} ta='center'>{t("هل تريد تسجيل الخروج ؟")}</Text>
          <Flex justify='space-between' gap={20} mt={20}>
            <Button data-autofocus radius={10} fullWidth variant="outline" color='#B21222' onClick={() => setOpenLogout(false)}>
              {t("الغاء")}
            </Button>
            <Button radius={10} fullWidth variant="filled" color='#B21222' onClick={handleLogout}>
              {t("تسجيل الخروج")}
            </Button>
          </Flex>
        </Stack>
      </Modal>
    </>
  )
}
export default LogoutModal