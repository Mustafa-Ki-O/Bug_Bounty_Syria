import { useNavigate } from "react-router-dom";
import { TextInput, Button, PasswordInput, rem,Container,Flex,Grid,GridCol} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { IconAt } from "@tabler/icons-react";
import { useState,useEffect } from "react";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import useLogin from "../../components/useMutation/company/useLogin";

const schema = yup.object().shape({
  password: yup
    .string()
    .min(8, "Password should have at least 8 letters or numbers"),
  email: yup.string().required("Invalid email").email("Invalid email"),
});

const LoginCompany = ({setProgress}) => {
  const { t } = useTranslation();
  const {login,isLoading} = useLogin();
  const [isSubmitted,setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;

  const form = useForm({
    mode: "uncontrolled",
    validateInputOnChange: true,
    initialValues: { password: "", email: "" },
    validate: yupResolver(schema),
  });

  const handleSubmite = (values) => {
    if (form.isValid) {
      const loginFormData = new FormData();
      Object.keys(values).forEach((key) => {
        loginFormData.append(key, values[key]);
      });
      setIsSubmitted(true);
      login(loginFormData);

    const validated = form.validate();

    if (validated) {
      validated.errors; //Object with errors
    }
  };
  }
  
  useEffect(() => {
    if(isSubmitted){
     setProgress(isLoading)
    }
   },[isLoading])


  return (
    <>
           <Container w='100%'>
              <form style={{width:'100%'}} onSubmit={form.onSubmit(handleSubmite)}>
              <Grid gutter="sm" justify="center" dir="rtl" mb={20}>
              <GridCol span={12}>
                <TextInput
                  mt="sm"
                  placeholder={t("أدخل البريد الالكتروني *")}
                  key={form.key("email")}
                  {...form.getInputProps("email")}
                  rightSection={icon}
                />
                </GridCol>
                <GridCol span={12}>
                <PasswordInput
                  mt="sm"
                  placeholder={t("أدخل كلمة المرور *")}
                  key={form.key("password")}
                  {...form.getInputProps("password")}
                />
                </GridCol>
                </Grid>
                <Flex visibleFrom="md" gap='1.25rem' w='100%' justify='space-around'>
                <Button fullWidth radius={10} variant="outline" color='#b21222' mt="sm" onClick={() => navigate(`/`)}>
                    {t("انشاء حساب")}
                  </Button>
                  <Button fullWidth radius={10} variant="filled" color='#b21222' type="submit" mt="sm">
                    {t("تسجيل الدخول")}
                  </Button>
                </Flex>
                <Grid hiddenFrom="md" gutter={0}>
                  <GridCol span={12}>
                  <Button fullWidth radius={10} variant="filled" color='#b21222' type="submit" mt="sm">
                    {t("تسجيل الدخول")}
                  </Button>
                  </GridCol>
                  <GridCol span={12}>
                  <Button fullWidth radius={10} variant="outline" color='#b21222' mt="sm" onClick={() => navigate(`/`)}>
                    {t("انشاء حساب")}
                  </Button>
                  </GridCol>
                </Grid>
              </form>
            </Container>
    </>
  );
};

export default LoginCompany;
