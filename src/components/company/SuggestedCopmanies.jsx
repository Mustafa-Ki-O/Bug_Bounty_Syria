import { Grid,Text,Container } from "@mantine/core"
import CompanyCard from "../home/CompanyCard"
import data from '../home/data.json'
import meta from '../../assets/vectors/brand-meta.png'

const SuggestedCompany = () => {

        const result = data.filter((company)=> company.rate >= 4).map((company)=>company)
        console.log(result[0])
    return(
        <>
        <Text size='md' fw={700} c='#1D1D1B' mb={20} ta='end'>الشركات المقترحة </Text>
       <Container fluid w='100%'  p={50} pt={5}>
        <Grid  justify="center" gutter={35}>
            {result.map((company,index)=>(
              <Grid.Col span={3} xs={4} md={4} mb={20} lg={4} key={index}>
              <CompanyCard 
              companyName={company.name}
              domain={company.domain}
              description={company.description}
              type={company.type}
              numEmployees={company.numEmployees}
              image={meta}
              />
              </Grid.Col>
            ))}
            </Grid>
            </Container>
        </>
    )

}
export default SuggestedCompany