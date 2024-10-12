import { Anchor, AppShell,  Flex, Group, Image, Text } from "@mantine/core"
import instagramIcon from '../../assets/vectors/Vector (1).png'
import facebookIcon from '../../assets/vectors/Vector (2).png'
import linkedinIcon from '../../assets/vectors/Vector (3).png'
import xIcon from '../../assets/vectors/Vector (4).png'
import privacyIcon from '../../assets/vectors/Vector (5).png'
const Footer = () => {
  const data = ['privacy', 'services', 'contact-us']
  const icons =[instagramIcon,facebookIcon,linkedinIcon,xIcon]
  return (
    <>
      <AppShell >
        <AppShell.Footer bd='none' style={{ position: 'relative',backgroundColor:'transparent',alignItems:'center',padding:'20px 40px',marginTop:20 }}>
          <Flex justify='space-between'>
            <Group>
            <Image src={privacyIcon} w={20}/>
             <Text size="md" c='#1D1D1B90' fw={500}>
                 Bug Bounty Syria
             </Text>
            </Group>
            <Flex gap={50}>
              <Group>
                {data.map((el,i) => (
                  <Anchor key={i} size='md' c='#1D1D1B90' fw={500}>{el}</Anchor>
                ))}
              </Group>
              <Group>
                {icons.map((el,i) =>(
                    <Image src={el} key={i} w={20} style={{cursor:'pointer'}} />
                ))}
              </Group>
            </Flex>
          </Flex>
        </AppShell.Footer>
      </AppShell>
    </>
  )
}

export default Footer 