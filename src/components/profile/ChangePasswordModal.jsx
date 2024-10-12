import { Modal, Stack, Text, PasswordInput, Flex, Button,Grid,GridCol } from "@mantine/core";
import '../../assets/css/passwordModal.css'
import { useTranslation } from 'react-i18next';
import { useForm } from "@mantine/form";
import { yupResolver } from "mantine-form-yup-resolver";
import * as yup from "yup";
import { useState,useEffect } from "react";
import useChangepassword from "../useMutation/researcher/useChangePassword";

const ChangePasswordModal = ({ opened, close,setProgress }) => {
  
  const {change,isLoading} = useChangepassword();
  const { t } = useTranslation();
  const [isSubmitted,setIsSubmitted] = useState(false);
  const schema = yup.object().shape({
    old_password:yup.string().min(6,'يجب ان يحوي  على  6 احرف على الاقل'),
    new_password:yup.string().min(6,'يجب ان يحوي  على  6 احرف على الاقل'),
    new_password_confirmation:yup.string().min(6,'يجب ان يحوي  على 6 احرف على الاقل'),
  })

  const form = useForm({
    mode:'uncontrolled',
    validateInputOnChange:false,
    initialValues:{
      old_password: '',
      new_password : '',
      new_password_confirmation : ''
    },
    validate:yupResolver(schema)
  })

  const handleSubmit = () => {
    if(form.isValid){
      const values = form.getValues();
      const newFormData = new FormData();
      Object.keys(values).forEach((key)=>{
        newFormData.append(key,values[key])
      });

      console.log(values);
      setIsSubmitted(true);
      change(newFormData);
      
    }
    const validated = form.validate();
    if(validated){
      validated.errors
    }
    form.reset();
  }

  useEffect(() => {
   if(isSubmitted){
    setProgress(isLoading)
   }
  },[isLoading])

  return (
    <>
      <Modal w='100%' radius={20} opened={opened} onClose={close} centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 2,
        }} style={{ position: 'absolute', right: 0 }}>
        <Stack pb={50} dir="rtl" className="modal" w='70%' m='auto' gap={15}>
          <Text size="lg" fw={900} ta='center'>{t("تغيير كلمة المرور")}</Text>
          <Text size="xs" fw={700} c='#1D1D1B55' ta='center'>{t("يرجى اعادة تعيين كلمة المرور")}</Text>
          <form onSubmit={form.onSubmit(handleSubmit)}>
          <Grid gutter={12}>
          <GridCol span={12} >
          <PasswordInput
            mt="sm"
            radius={10}
            className="password"
            placeholder={t("أدخل كلمة المرور الحالية*")}
             key={form.key("old_password")}
             {...form.getInputProps("old_password")}
          />
          </GridCol>
          <GridCol span={12}>
          <PasswordInput
            mt="sm"
            radius={10}
            className="password"
            placeholder={t("أدخل كلمة المرور الجديدة *")}
             key={form.key("new_password")}
             {...form.getInputProps("new_password")}
          />
          </GridCol>
          <GridCol span={12}>
          <PasswordInput
            mt="sm"
            radius={10}
            className="password"
            placeholder={t("قم بتأكيد كلمة المرور *")}
             key={form.key("new_password_confirmation")}
             {...form.getInputProps("new_password_confirmation")}
          />
          </GridCol>
          </Grid>
          <Flex justify='space-between' gap={20} mt={20}>
            <Button radius={10} fullWidth variant="outline" color='#B21222' onClick={close}>
              {t("رجوع")}
            </Button>
            <Button type="submit" radius={10} fullWidth variant="filled" color='#B21222' onClick={close}>
              {t("حفظ التغييرات")}
            </Button>
          </Flex>
          </form>
        </Stack>
      </Modal>
    </>
  )
}
export default ChangePasswordModal