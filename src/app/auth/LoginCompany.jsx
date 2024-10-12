import { useNavigate } from "react-router-dom";
import { TextInput, Button, PasswordInput, rem } from "@mantine/core";
import styles from "../../assets/css/login.module.css";
import { useForm, yupResolver } from "@mantine/form";
import { IconAt } from "@tabler/icons-react";
import { Container, Stack } from "@mantine/core";
import Progress from "../../components/general/Progress";
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

const LoginCompany = () => {
  const { t } = useTranslation();
  const {login,isLoading} = useLogin();
  const [isSubmitted,setIsSubmitted] = useState(false);
  const [progress, setProgress] = useState(false);
  const navigate = useNavigate();
  const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;

  useEffect(()=>{
    localStorage.clear();
  },[])

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
      {progress && <Progress />}
      <Container
        fluid
        m={0}
        p={0}
        h="100vh"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Stack
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div className={styles.contBox}>
            <div className={styles.headerBox}>
              <h2>{t("Bug Bounty مرحبا بك في")}</h2>
              <h5>{t("يرجى التسجيل للمتابعة")}</h5>
            </div>
            <div className={styles.contInputs}>
              <form onSubmit={form.onSubmit(handleSubmite)}>
                <TextInput
                  mt="sm"
                  placeholder={t("أدخل البريد الالكتروني *")}
                  key={form.key("email")}
                  {...form.getInputProps("email")}
                  style={{ marginBottom: "20px", width: "300px" }}
                  className={styles.emailInput}
                  rightSection={icon}
                />
                <PasswordInput
                  mt="sm"
                  placeholder={t("أدخل كلمة المرور *")}
                  key={form.key("password")}
                  {...form.getInputProps("password")}
                  style={{ marginBottom: "20px", width: "300px" }}
                  className={styles.passInput}
                />
                <div className={styles.contButtons}>
                  <Button type="submit" mt="sm">
                    {t("تسجيل الدخول")}
                  </Button>
                  <Button mt="sm" onClick={() => navigate(`/`)}>
                    {t("انشاء حساب")}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Stack>
      </Container>
    </>
  );
};

export default LoginCompany;
