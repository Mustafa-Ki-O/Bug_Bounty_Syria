import { Container, Title, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  return (
    <Container m={0}  style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 15 }}>
      <Title ta='start'  order={3} style={{ color: '#1D1D1B', direction: 'rtl', fontWeight: 900 }}>
        {t("مرحباً بك في BUG Bounty")}
      </Title>
      <Text weight={900} color="#CDCDCD" >
        {t("يرجى التسجيل للمتابعة")}
      </Text>
    </Container>
  );
};

export default Header;