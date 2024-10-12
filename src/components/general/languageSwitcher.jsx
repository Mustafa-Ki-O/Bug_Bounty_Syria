import { useTranslation} from 'react-i18next';


const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const lang = localStorage.getItem('lang')
  const handleLanguageChange = (event) => {
    localStorage.setItem('lang',event.target.value)
    i18n.changeLanguage(event.target.value);
  };

  return (
    
      <select onChange={handleLanguageChange} 
      style={{padding:5,borderRadius:4,marginTop:4}}>
        <option value="ar" selected={lang ===  'ar'}>{t('Arabic')}</option>
        <option value="en" selected={lang ==='en'}>{t('English')}</option>
      </select>

        


  );
};

export default LanguageSwitcher;