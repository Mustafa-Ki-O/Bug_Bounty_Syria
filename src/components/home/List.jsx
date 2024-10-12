import CompanyCard from './CompanyCard';
import { Container, Grid,Text } from '@mantine/core';
import meta from '../../assets/vectors/brand-meta.png'
import { useTranslation } from 'react-i18next';
import { FetchHome } from '../../api/researcher/fetchHome';
import { useEffect,useState } from 'react';
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

        <Text size='md' fw={700} c='#1D1D1B' mb={20}>{t('مجموعة الشركات الموجودة')}</Text>
        <Grid  justify="center" gutter={25}>
            {companies && companies.map((company,index)=>{
                return(
                    <Grid.Col span={3} xs={4} md={4} mb={20} lg={4} key={index}>
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