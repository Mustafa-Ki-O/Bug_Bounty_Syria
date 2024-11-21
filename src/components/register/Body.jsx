import { Container, Button, Grid,GridCol ,Select, Stack,Flex} from "@mantine/core";
import Header from "./Header";
import { useState } from "react";
import ResearcherForm from "./form/ResearcherForm";
import CompanyForm from "./form/CompanyForm";
import { useTranslation } from 'react-i18next';

const Body = ({setProgress}) => {
  const { t } = useTranslation();

  const [active, setActive] = useState('1');

  const handleClick = (index) => {
    setActive(index);
  };

  return (
    <Container
    fluid
    w={{lg:'65%',md:'65%',sm:'90%',xs:'100%'}}
    p={40}
    m='auto'
    >
        <Stack w='100%' bg="#F9F9F9" p={30} style={{borderRadius:10,boxShadow:"0px 2px 6px 0 #000"}}>
        <Header />
           <Flex visibleFrom="md" w='80%' gap='1.25rem' justify='center' m="auto">
             <Button
               fullWidth
               radius='15px 10px 10px 10px'
               size="md"
               style={{boxShadow: active ==='0' ? '0 2px 4px 0 #b21222' : undefined}}
               variant={active === '0' ? "filled" : "outline"}
               color="#B21222"
               onClick={() => handleClick('0')}
             >
               {t("التسجيل كشركة جديدة")}
             </Button>
             <Button
               fullWidth
                radius='10px 15px 10px 10px'
               size="md"
               style={{boxShadow: active ==='1' ? '0 2px 4px 0 #b21222' : undefined}}
               variant={active === '1' ? "filled" : "outline"}
               color="#B21222"
               onClick={() => handleClick('1')}
             >
               {t("التسجيل كباحث أمني")}
             </Button>
         </Flex>
         <Grid my={15} hiddenFrom="md">
          <GridCol span={12} dir="rtl">
           <Select
             dir="rtl"
             checkIconPosition="right"
             value={active}
             onChange={(value) => handleClick(value)}
             data={[
               { value: '0', label: t("التسجيل كشركة جديدة") },
               { value: '1', label: t("التسجيل كباحث أمني") },
             ]}
           />
           </GridCol>
         </Grid>
        {active === '0' ? <CompanyForm setProgress={setProgress}/> : <ResearcherForm setProgress={setProgress}/>}
        </Stack>
    </Container>
  );
};

export default Body;