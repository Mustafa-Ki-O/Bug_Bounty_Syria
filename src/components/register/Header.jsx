import { Title, Text, Stack } from '@mantine/core';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  return (
    
      <Stack align='center'>
      <Title ta='start'  order={3} style={{ color: '#1D1D1B', direction: 'rtl', fontWeight: 900 }}>
        {t("مرحباً بك في BUG Bounty")}
      </Title>
      <Text weight={900} color="#CDCDCD" >
        {t("يرجى التسجيل للمتابعة")}
      </Text>
      </Stack>
  );
};

export default Header;