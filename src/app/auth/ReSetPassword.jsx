import { Button, Container, Stack, TextInput } from "@mantine/core";
import * as yup from "yup";
import { useForm, yupResolver } from "@mantine/form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../assets/css/ReSetPassword.module.css";
import message from "../../assets/vectors/Vector2.png";
import Progress from "../../components/general/Progress";
import { useTranslation } from "react-i18next";
import usePostemail from "../../components/useMutation/researcher/resetPassword/usePostemail";

const schema = yup.object().shape({
  email: yup.string().required("Invalid email").email("Invalid email"),
});

const ReSetPassword = () => {
  const { t } = useTranslation();
  const [progress, setProgress] = useState(false);
  
  const navigate = useNavigate();
  const {postEmail,isLoading} = usePostemail();

  const [isSubmitted,setIsSubmitted] = useState(false);
  const form = useForm({
    mode: "uncontrolled",
    validateInputOnChange: true,
    initialValues: { email: "" },
    validate: yupResolver(schema),
  });

  const handleSubmite = (values) => {
    if (form.isValid) {
      const formData = new FormData();
      Object.keys(values).forEach((key) => {
        formData.append(key, values[key]);
      });
      localStorage.setItem('email', JSON.stringify(values.email));
      setIsSubmitted(true);
      postEmail(formData);

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
              <h2>{t("اعادة تعيين كلمة المرور")}</h2>
              <h5>
                {t("يرجى ادخال البريد الالكتروني لاعادة تعيين كلمة المرور")}
              </h5>
            </div>
            <div className={styles.contInputs}>
              <form onSubmit={form.onSubmit(handleSubmite)}>
                <TextInput
                  w="100%"
                  mt={10}
                  mb={10}
                  placeholder={t("أدخل البريد الإلكتروني")}
                  rightSection={<img src={message} width="20px" />}
                  key={form.key("email")}
                  {...form.getInputProps("email")}
                  className={styles.codeInput}
                />
                <div className={styles.contButtons}>
                  <Button onClick={() => navigate('/login')}>
                    {t("رجوع")}
                  </Button>
                  <Button type="submit">{t("التحقق من الرمز")}</Button>
                </div>
              </form>
            </div>
          </div>
        </Stack>
      </Container>
    </>
  );
};

export default ReSetPassword;