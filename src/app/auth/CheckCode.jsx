import { Button, Container, Stack, TextInput } from "@mantine/core";
import * as yup from "yup";
import { useForm, yupResolver } from "@mantine/form";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../assets/css/checkCode.module.css";
import code from "../../assets/vectors/Vector5.png";
import Progress from "../../components/general/Progress";
import { useTranslation } from "react-i18next";
import usePostOtp from "../../components/useMutation/researcher/resetPassword/usePostOtp";

const schema = yup.object().shape({
  code: yup.string().min(4, "name should have at least 4 numbers "),
});

const CheckCode = () => {
  const { t } = useTranslation();
  const [progress, setProgress] = useState(false);
  const navigate = useNavigate();
  const {postOtp,isLoading} = usePostOtp();
  const [isSubmitted,setIsSubmitted] = useState(false);

  const form = useForm({
    mode: "uncontrolled",
    validateInputOnChange: true,
    initialValues: { otp: "" },
    validate: yupResolver(schema),
  });

  const handleSubmite = (values) => {
   if (form.isValid) {
      const formData = new FormData();
      const email =localStorage.getItem('email');
      const validEmail = JSON.parse(email)
      console.log(validEmail)
      Object.keys(values).forEach((key) => {
        formData.append(key, values[key]);
        formData.append('email',validEmail);
      });
      setIsSubmitted(true);
      postOtp(formData);
      
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
              <h2>{t("ادخال رمز التحقق")}</h2>
              <h5>
                {t("يرجى تفقد البريد و من ثم ادخال الرمز المؤلف من 4 خانات")}
              </h5>
            </div>
            <div className={styles.contInputs}>
              <form onSubmit={form.onSubmit(handleSubmite)}>
                <TextInput
                  w="100%"
                  mt={10}
                  mb={10}
                  placeholder={t("أدخل كود التسجيل")}
                  rightSection={<img src={code} width="20px" />}
                  key={form.key("otp")}
                  {...form.getInputProps("otp")}
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

export default CheckCode;