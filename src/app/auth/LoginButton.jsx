import { Button } from "@mantine/core"
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {

    const navigate = useNavigate();
    const { t } = useTranslation();
    return(
    <>
    <Button fullWidth radius={10} 
    size="md" variant="outline" 
    color="#B21222" onClick={() => navigate('login')} >
        {t('تسجيل الدخول')}
    </Button>
    </>)
}
export default LoginButton