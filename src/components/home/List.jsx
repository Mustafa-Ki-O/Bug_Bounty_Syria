import CompanyCard from './CompanyCard';
import { Container, Grid,Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';

const List = ({companies}) => {
  
  const { t } = useTranslation();
    if (companies.length === 0) {
        return (
          <Container fluid w='100%' h='100vh' p={50} pt={5} >
            <Text size='md' fw={700} c='#1D1D1B' m='auto'>! لا توجد بيانات </Text>
          </Container>
        );
      }
    
    return(
        <Container fluid w='100%'  p={50} pt={5}>

        <Text size='lg' fw={900} c='#1D1D1B' mb={20}>{t('مجموعة الشركات الموجودة')}</Text>
        <Grid  justify="center" gutter={25} >
            {companies && companies.map((company,index)=>{
                return(
                    <Grid.Col span={{lg:3 , md:4,sm:6,xs:12 }} key={index} my={20}>
                        <CompanyCard 
                        id={company.uuid}
                        companyName={company.name} 
                        domain={company.domain} 
                        description={company.description} 
                        type={company.type} 
                        numEmployees={company.employess_count}
                        image={company.logo}/>
                    </Grid.Col>
                )
            })}
          
       </Grid>
       </Container>
        
    )


}
export default List;