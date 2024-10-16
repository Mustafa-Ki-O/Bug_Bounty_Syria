import { Text,Button,Stack,Modal,Flex } from "@mantine/core"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
const LoginModal = ({ opened, close, setProgress }) => {

    const {t} = useTranslation()
    const navigate = useNavigate();

    const handleClick = () => {
        setProgress(true)
        setTimeout(()=>{
            navigate('/login')
        },1000)
    }

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
          <Text size="xl" fw={900} ta="center" mb={20}>
            {t("سجل دخول الان")}
          </Text>
          <Flex w='100%' justify='space-around' gap={20}>
            <Button w={130}  radius={10}  size="md"  variant="filled" color="#B21222"  onClick={handleClick}>
             {t('شركة جديدة')}
            </Button>
            <Button  w={130}  radius={10}  size="md"  variant="filled" color="#B21222"  onClick={handleClick}>
             {t('باحث أمني')}
            </Button>
          </Flex>
        </Stack>
      </Modal>
        </>
    )

}
export default LoginModal