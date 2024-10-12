import { Tabs } from "@mantine/core"
import '../../assets/css/infoNav.css'
import PersonalInfo from './PersonalInfo.jsx'
import ReportsSent from './ReportsSent.jsx'
import Bugs from './Bugs.jsx'
import Companies from './Companies.jsx'
import SecurityInfo  from './SecurityInfo.jsx'

const InfoNav = () => {
    
    return (
        <Tabs  defaultValue="personalInfo" style={{width:'90%',margin:'auto',filter:'drop-shadow(0 1px 3px #000)'}}>
          <Tabs.List className="tabs" px={30} justify="end"  c='white' bg='#B21222' style={{borderRadius:'0 0 25px 25px',gap:25}}>
            <Tabs.Tab className="button"  value="reportsSent" fz={18} >
              التقارير المرسلة
            </Tabs.Tab>
            <Tabs.Tab className="button" value="companies" fz={18} >
              الشركات
            </Tabs.Tab>
            <Tabs.Tab className="button" value="bugs" fz={18} >
              الثغرات المكتشفة
            </Tabs.Tab>
            <Tabs.Tab className="button" value="securityInfo" fz={18} >
              معلومات الحماية
            </Tabs.Tab>
            <Tabs.Tab className="button" value="personalInfo" fz={18} >
              المعلومات الشخصية
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="reportsSent" >
            <ReportsSent/>
          </Tabs.Panel>
          <Tabs.Panel value="companies">
            <Companies/>
          </Tabs.Panel>
          <Tabs.Panel value="bugs">
            <Bugs/>
          </Tabs.Panel>
          <Tabs.Panel  value="securityInfo">
            <SecurityInfo/>
          </Tabs.Panel>
          <Tabs.Panel  value="personalInfo">
            <PersonalInfo/>
          </Tabs.Panel>
        </Tabs>
);


}
export default InfoNav