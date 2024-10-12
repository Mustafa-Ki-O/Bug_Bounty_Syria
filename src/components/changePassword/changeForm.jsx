import { Button, Container,PasswordInput,Grid,GridCol,Box,Flex,Text } from "@mantine/core";
import * as yup from "yup";
import '../../assets/css/passwordModal.css'
import { useForm, yupResolver } from "@mantine/form";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Progress from "../general/Progress";
import { useTranslation } from "react-i18next";
import usePostPassword from "../useMutation/researcher/resetPassword/usePostPassword";

const schema = yup.object().shape({
    password:yup.string().min(8,'يجب ان يحوي  على 8 احرف على الاقل'),
    password_confirmation:yup.string().min(8,'يجب ان يحوي  على 8 احرف على الاقل'),
  })
  
const ChangePasswordForm = () => {
  const { t } = useTranslation();
  const [progress, setProgress] = useState(false);
  const navigate = useNavigate();
  const {postPassword,isLoading} = usePostPassword();
  const [isSubmitted,setIsSubmitted] = useState(false);

  const form = useForm({
    mode: "uncontrolled",
    validateInputOnChange: true,
    initialValues: { 
        password: "",
        password_confirmation:'',
       },
    validate: yupResolver(schema),
  });

  const handleSubmite = (values) => {
   if (form.isValid) {
      const formData = new FormData();
      const uuid =localStorage.getItem('uuid');

      console.log(uuid)
      Object.keys(values).forEach((key) => {
        formData.append(key, values[key]);
        formData.append('uuid',uuid);
      });
      setIsSubmitted(true);
      postPassword(formData);
      
    }

    const validated = form.validate();

    if (validated) {
      validated.errors; //Object with errors
    }
  };

  useEffect(()=>{
    if(isSubmitted){
      setProgress(isLoading)
     }
  },[isLoading])

  return (
    <>
      {progress && <Progress />}
      <Container
        fluid
        m={0}
        p={0}
        h="100vh"
        style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}
      >
        <Box w='40%' p={30} bg='#fff' style={{borderRadius:20,boxShadow:'0px 2px 4px 0px #000'}}>
        <Text mb={10} size="lg" c='#000' fw={800}>{t('تغيير كلمة المرور')}</Text>
          <form onSubmit={form.onSubmit(handleSubmite)}>
          <Grid gutter={3} dir="rtl">
          <GridCol span={12}>
          <PasswordInput
            mt="sm"
            radius={10}
            className="password"
            placeholder={t("أدخل كلمة المرور الجديدة *")}
             key={form.key("password")}
             {...form.getInputProps("password")}
          />
          </GridCol>
          <GridCol span={12}>
          <PasswordInput
            mt="sm"
            radius={10}
            className="password"
            placeholder={t("قم بتأكيد كلمة المرور *")}
             key={form.key("password_confirmation")}
             {...form.getInputProps("password_confirmation")}
          />
          </GridCol>
          </Grid>
          <Flex mt={20} justify='space-between' gap={10}>
              <Button radius={10} fullWidth variant ='outline' color="#B21222"  onClick={() => navigate('/checkcode')}>{t("رجوع")}</Button>
              <Button radius={10} fullWidth  variant="filled" color="#B21222" type="submit">{t('تأكيد')}</Button>
          </Flex>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default ChangePasswordForm;