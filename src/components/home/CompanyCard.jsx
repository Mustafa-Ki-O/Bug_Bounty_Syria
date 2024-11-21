import { Card, Image, Text, Button, Group, Flex,Stack, Anchor } from '@mantine/core';
import users from '../../assets/vectors/Vector (9).png'
import building from '../../assets/vectors/Vector (10).png'
import newWindow from '../../assets/vectors/Vector (12).png'
import www from  '../../assets/vectors/Vector (8).png'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CompanyCard = ({companyName,domain,description,type,numEmployees,image,id}) => {
  
  const {t} = useTranslation();

  const navigate = useNavigate();
  return (
    <Card shadow="sm" padding="lg" radius="md" bg='#F9F9F9'  withBorder style={{boxShadow:'0 4px 8px #000'}}>
      <Stack mih={300} justify='space-between'>
      <Group justify='flex-end' >
      <Text size="md">
      {companyName}
      </Text>
         <Image src={image} 
            w={50}
            h={50}
            radius='50%' 
            style={{filter:'drop-shadow(0px 1px 2px #000)'}}/>
      </Group>
      <Group justify='flex-end' gap={3}>
        <Image src={newWindow}  w={15} alt='...' style={{filter:'drop-shadow(0 1px 1px #000 )'}}/>
          <Anchor c='#000' fw={800} td='underline' size='md'>{domain}</Anchor>
        <Image src={www} w={20} alt='...'/>
      </Group>
      <Text size="sm" lineClamp={5} ta='end'>
      {description}
     </Text>
     <Flex
      gap="lg"
      justify="flex-end"
      align="center"
      direction="row"
      wrap="wrap"
    >
      <Group gap={4} >
      <Text size='sm' fw={700}>{type}</Text>
      <Image
        src={building} 
        alt='...'
        fw={800}
        w={20} />
      </Group>
      <Group gap={4}>
      <Text size='sm' fw={700}>{numEmployees}</Text>
        <Image
        src={users} 
        alt='...'
        fw={800}
        w={20} />
      </Group>
      </Flex>
      <Button color="#B21222" variant='outline' fullWidth radius="md" align='flex-end' fw={800} 
      onClick={() => navigate(`/Bug_Bounty_Syria/company/${id}`)}>
        {t('قراءة المزيد')}
      </Button>
      </Stack>
    </Card>
  );
}
export default CompanyCard

