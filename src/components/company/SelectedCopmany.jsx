import { Group,Container } from "@mantine/core"
import InfoCompany from "./InfoCompany"
import ImageCompany from "./ImageCompany"


const SelectedCompany = ({selectedCompany}) => {

  const {uuid,logo,name,description,type,domain,employess_count}  = selectedCompany

    return(
        <Group p={0}>
          <Container visibleFrom="sm" w={600} h={400} >
            <ImageCompany />
          </Container>
          <Container  w={600}  p={0} >
            <InfoCompany 
            id={uuid}
            logo={logo}
            name={name}
            description={description}
            type={type}
            domain={domain}
            numEmployee={employess_count}
            />
          </Container>
        </Group> 
    )
}
export default SelectedCompany