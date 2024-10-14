import {Checkbox,TextInput,Button,Group,Anchor,PasswordInput,Grid,GridCol} from "@mantine/core";
import person from "../../../assets/vectors/Vector1.png";
import message from "../../../assets/vectors/Vector2.png";
import phone from "../../../assets/vectors/Vector3.png";
import "../../../assets/css/researcher.css";
import { PostResearcher } from "../../../api/researcher/postResearcher";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "mantine-form-yup-resolver";
import * as yup from "yup";
import { useForm } from "@mantine/form";
import { useTranslation } from 'react-i18next';

const ResearcherForm = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();


  const schema = yup.object().shape({
    name: yup.string().min(2, t("name should have at least 2 letters ")),
    email: yup.string().required(t("Invalid email")).email(t("Invalid email")),
    phone: yup.string().min(10, t("name should have at least 10 letters ")),
    password: yup
      .string()
      .min(8, t("Password should have at least 8 letters or numbers")),
      termsOfService:yup.bool()
      .oneOf([true], t("you must accept")),
    });

  const form = useForm({
    mode: "uncontrolled",
    validateInputOnChange: false,
    initialValues: {
      name:'',
      email:'',
      phone:'',
      password:'',
      termsOfService:''
    },
    validate: yupResolver(schema),
  });

  const handleSubmit = () => {
    if (form.isValid) {
      const values = form.getValues();
      const newFormData = new FormData();
      Object.keys(values).forEach((key) => {
        if(key !== 'termsOfService'){
          newFormData.append(key, values[key]);
          }
      });
      PostResearcher(newFormData);
      console.log(values);
      navigate("/checkcoderegister"); 
    }
  
    const validated = form.validate();

    if (validated) {
      validated.errors; //Object with errors
    }
    form.reset();
  };

  return (
<form
  onSubmit={form.onSubmit(handleSubmit)}
  style={{ width: "100%", marginTop: 20 }}
>
  <Grid gutter="lg" justify="center" dir="rtl">
    <GridCol span={{  lg: 6 ,xs: 12 ,sm: 12 ,md:12 }}>
      <TextInput
        placeholder={t("أدخل الاسم الكامل *")}
        rightSection={<img src={person} width="20px" />}
        key={form.key("name")}
        {...form.getInputProps("name")}
      />
    </GridCol>
    <GridCol span={{  lg: 6 ,xs: 12 ,sm: 12 ,md:12 }}>
      <TextInput
        placeholder={t("أدخل البريد الإلكتروني *")}
        rightSection={<img src={message} width="20px" />}
        key={form.key("email")}
        {...form.getInputProps("email")}
      />
    </GridCol>
    <GridCol span={{  lg: 6 ,xs: 12 ,sm: 12 ,md:12 }}>
      <TextInput
        placeholder={t("أدخل رقم الهاتف *")}
        rightSection={<img src={phone} width="20px" />}
        key={form.key("phone")}
        {...form.getInputProps("phone")}
      />
    </GridCol>
    <GridCol span={{  lg: 6 ,xs: 12 ,sm: 12 ,md:12 }}>
      <PasswordInput
        placeholder={t("أدخل كلمة المرور *")}
        key={form.key("password")}
        {...form.getInputProps("password")}
      />
    </GridCol>
    <GridCol offset={{lg:6,md:0}} span={{  lg: 6 ,xs: 12 ,sm: 12 ,md:12 }} style={{direction:'ltr'}}  >
      <Checkbox
        key={form.key("termsOfService")}
        {...form.getInputProps("termsOfService", { type: "checkbox" })}
        size="xs"
        label={
          <>
            {t("أنا اوافق على")}{" "}
            <Anchor href="https://google.com" target="_blank" inherit>
              {t("الشروط والاحكام")}
            </Anchor>
          </>
        }
        style={{ marginBottom: 15,direction:'rtl' }}
      />
    </GridCol>
  </Grid>
  <Grid mt={20}>
    <GridCol span={{ lg:4 , xs:12, sm:12, md:4 }}>
        <Button
          fullWidth
          radius={10}
          size='md'
          variant="outline"
          color="#B21222"
          onClick={() => navigate("/login")}
        >
          {t(" تسجيل الدخول كباحث")}
        </Button>
        </GridCol>
        <GridCol span={{ lg:4 , xs:12, sm:12, md:4 }}>
        <Button
          fullWidth
          radius={10}
          size='md'
          variant="outline"
          color="#B21222"
          onClick={() => navigate("/loginCompany")}
        >
          {t("تسجيل الدخول كشركة")}
        </Button>
        </GridCol>
        <GridCol span={{ lg:4 , xs:12, sm:12, md:4 }}>
        <Button fullWidth  radius={10} size="md" type="submit" variant="filled" color="#B21222">
          {t("انشاء حساب")}
        </Button>
    </GridCol>
    </Grid>
</form>
  );
};

export default ResearcherForm;