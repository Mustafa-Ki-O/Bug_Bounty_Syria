import { Container, Stack, TextInput,Text, Button,Image,Popover,Tooltip, Box, Grid, Group,Flex} from '@mantine/core';
import filterIcon from '../../assets/vectors/Vector (11).png'
import { IconSearch } from '@tabler/icons-react';
import { useState } from 'react';
import refreshIcon from '../../assets/vectors/refresh.png'
import { useTranslation } from 'react-i18next';
import { FetchHome } from '../../api/researcher/fetchHome';

const Header = ({setCompanies}) => {


  const [searchTerm, setSearchTerm] = useState();
  const [unavailability,setUnavailability] = useState();
  const [availability,setAvailability] = useState();
  const [oldPro,setOldPro] = useState();
  const [newPro,setNewPro] = useState();

  const {t} = useTranslation();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSearchClick= () => {
    FetchHome({ searchTerm: searchTerm, unavailability: unavailability,availability:availability, oldPro: oldPro, newPro: newPro }).then((res) => setCompanies(res.data.companies))
  }

  const handleRefresh = () => {
    setNewPro(undefined);
    setOldPro(undefined);
    setUnavailability(undefined);
    setAvailability(undefined);
  }



    return(
        <Container fluid w='100%' >
            <Stack  align='end'>
            <Text size="xl" c="#1D1D1B" fw={800}>
              ! {t('اكتشف الفرص الان')}
            </Text>
            <Container fluid p={14} w='100%' bg='#F9F9F9' style={{ boxShadow: '0px 3px 10px 0 #000', display: 'flex', placeItems: 'end', gap: 5, borderRadius: 5 }}>
      <Flex visibleFrom='sm' gap={4}>
      <Popover width={350} position="bottom" shadow="md" radius={20} offset={12}>
        <Popover.Target>
          <Button size='sm' m={0} variant='filled' color='#fff' style={{ border: '1px solid #B21222' }}><Image src={filterIcon} /></Button>
        </Popover.Target>
        <Popover.Dropdown style={{ marginLeft: 30 }}>
          <Box style={{ position: 'relative' }}>
            <Tooltip label={t('اعادة تعيين')} color="#b21222">
              <Image src={refreshIcon} w={20} style={{ position: 'absolute', right: 10, top: -15, cursor: 'pointer' }} onClick={handleRefresh} />
            </Tooltip>
            <Text size='md' ta='center' fw={700} mt={25}>{t('التصنيف حسب')}</Text>
            <Grid p={20}>
              <Grid.Col span={4}>
                <Button fullWidth variant={unavailability === 1 ? 'filled' : 'outline'} color='#B21222' p={5} fz={10} onClick={() => {setUnavailability(1);setAvailability(undefined)}}>{t('غير متاح')}</Button>
              </Grid.Col>
              <Grid.Col span={4}>
                <Button fullWidth variant={availability === 1 ? 'filled' : 'outline'} color='#B21222' p={5} fz={10} onClick={() =>{ setAvailability(1); setUnavailability(undefined)}}>{t('متاح')}</Button>
              </Grid.Col>
              <Grid.Col span={4} m='auto'>
                <Text size='sm' ta='center' fw={700}>{t('الاتاحية')} :</Text>
              </Grid.Col>
              <Grid.Col span={4}>
                <Button fullWidth color='#B21222' fz={10} p={4} onClick={() => {setNewPro(1) ; setOldPro(undefined)}} variant={newPro === 1 ? 'filled' : 'outline'}>{t('بدءاً من الأحدث')}</Button>
              </Grid.Col>
              <Grid.Col span={4}>
              <Button fullWidth color='#B21222' fz={10} p={4} onClick={() => {setOldPro(1) ; setNewPro(undefined)}} variant={oldPro === 1 ? 'filled' : 'outline'}>{t('بدءاً من الأقدم')}</Button>
              </Grid.Col>
              <Grid.Col span={4} m='auto'>
                <Text size='sm' ta='center' fw={700}>{t('تاريخ النشر')} :</Text>
              </Grid.Col>
              <Grid.Col span={12}>
                <Button fullWidth size='sm' variant='filled' color='#B21222' onClick={handleSearchClick}>{t('فرز')}</Button>
              </Grid.Col>
            </Grid>
          </Box>
        </Popover.Dropdown>
      </Popover>
      <Button size='sm' m={0} w={80} variant='filled' color='#b21222' onClick={handleSearchClick}>{t('بحث')}</Button>
      </Flex>
      <TextInput
        label={<Text mb={8} size='md' c="#B21222" fw={800}>{t('أكثر من 190 شركة بانتظارك ماذا تنتظر ابدأ الأن')} !</Text>}
        mt="sm"
        placeholder={t('ابحث عن الشركة التي تريدها')}
        style={{ width: '100%', textAlign: 'start', direction: 'rtl', marginTop: 0 }}
        rightSection={<IconSearch width={20} />}
        onChange={handleSearch}
        value={searchTerm}
      />
      
    </Container>
      <Flex hiddenFrom='sm' w='100%' gap={10} >
      <Popover width={350} position="bottom" shadow="md" radius={20} offset={12}>
        <Popover.Target>
          <Button fullWidth size='sm' m={0} variant='filled' color='#fff' style={{ border: '1px solid #B21222' }}><Image src={filterIcon} /></Button>
        </Popover.Target>
        <Popover.Dropdown style={{ marginLeft: 30 }}>
          <Box style={{ position: 'relative' }}>
            <Tooltip label={t('اعادة تعيين')} color="#b21222">
              <Image src={refreshIcon} w={20} style={{ position: 'absolute', right: 10, top: -15, cursor: 'pointer' }} onClick={handleRefresh} />
            </Tooltip>
            <Text size='md' ta='center' fw={700} mt={25}>{t('التصنيف حسب')}</Text>
            <Grid p={20}>
              <Grid.Col span={4}>
                <Button fullWidth variant={unavailability === 1 ? 'filled' : 'outline'} color='#B21222' p={5} fz={10} onClick={() => {setUnavailability(1);setAvailability(undefined)}}>{t('غير متاح')}</Button>
              </Grid.Col>
              <Grid.Col span={4}>
                <Button fullWidth variant={availability === 1 ? 'filled' : 'outline'} color='#B21222' p={5} fz={10} onClick={() =>{ setAvailability(1); setUnavailability(undefined)}}>{t('متاح')}</Button>
              </Grid.Col>
              <Grid.Col span={4} m='auto'>
                <Text size='sm' ta='center' fw={700}>{t('الاتاحية')} :</Text>
              </Grid.Col>
              <Grid.Col span={4}>
                <Button fullWidth color='#B21222' fz={10} p={4} onClick={() => {setNewPro(1) ; setOldPro(undefined)}} variant={newPro === 1 ? 'filled' : 'outline'}>{t('بدءاً من الأحدث')}</Button>
              </Grid.Col>
              <Grid.Col span={4}>
              <Button fullWidth color='#B21222' fz={10} p={4} onClick={() => {setOldPro(1) ; setNewPro(undefined)}} variant={oldPro === 1 ? 'filled' : 'outline'}>{t('بدءاً من الأقدم')}</Button>
              </Grid.Col>
              <Grid.Col span={4} m='auto'>
                <Text size='sm' ta='center' fw={700}>{t('تاريخ النشر')} :</Text>
              </Grid.Col>
              <Grid.Col span={12}>
                <Button fullWidth size='sm' variant='filled' color='#B21222' onClick={handleSearchClick}>{t('فرز')}</Button>
              </Grid.Col>
            </Grid>
          </Box>
        </Popover.Dropdown>
      </Popover>
      <Button fullWidth size='sm' m={0}  variant='filled' color='#b21222' onClick={handleSearchClick}>{t('بحث')}</Button>
      </Flex>
  </Stack>
  </Container>
    )


}
export default Header