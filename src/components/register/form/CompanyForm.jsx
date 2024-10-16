import {Checkbox,Select,TextInput,Button,Flex,Anchor,PasswordInput,Grid,GridCol} from "@mantine/core";
import person from "../../../assets/vectors/Vector1.png";
import message from "../../../assets/vectors/Vector2.png";
import useReg from "../../useMutation/company/useReg";
import webIcon from "../../../assets/vectors/VectorWeb.png";
import numEmp from "../../../assets/vectors/VectorNum.png";
import typeicon from "../../../assets/vectors/VectorType.png";
import "../../../assets/css/company.css";
import { yupResolver } from "mantine-form-yup-resolver";
import * as yup from "yup";
import { useForm } from "@mantine/form";
import { useTranslation } from 'react-i18next';
import { useState,useEffect } from "react";
import LoginButton from "../../../app/auth/LoginButton";

const CompanyForm = ({setProgress}) => {
  const { t } = useTranslation();
  const {register,isLoading} = useReg();
  const[isSubmitted,setIsSubmitted] = useState(false)

  const schema = yup.object().shape({
    name: yup.string().min(2, t("name should have at least 2 letters ")),
    domain: yup.string().test(
      'domain',
      t("Invalid domain"),
      val => /^https?:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val)
    ),
    type: yup.string().required(t("Invalid type")),
    employess_count: yup.string().required(t("Invalid number of Employee")),
    email: yup.string().required(t("Invalid email")).email(t("Invalid email")),
    password: yup
      .string()
      .min(8, t("Password should have at least 8 letters or numbers")),
    termsOfService:yup
    .bool()
    .oneOf([true], t("you must accept")),
    });
  
  const form = useForm({
    mode: "uncontrolled",
    validateInputOnChange: true,
    initialValues:{
      name:'',
      domain:'',
      type:'',
      employess_count:'',
      email:'',
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
      setIsSubmitted(true)
      register(newFormData);

    } 
  };
  useEffect(()=>{
    if(isSubmitted){
    setProgress(isLoading)
    }
  },[isLoading])

  
  return (
    <form
  onSubmit={form.onSubmit(handleSubmit)}
  style={{ width: "100%", marginTop: 20 }}
>
  <Grid gutter="lg" justify="center" dir="rtl">
    <GridCol span={{ lg: 6 ,xs: 12 ,sm: 12 ,md:12 }}>
      <TextInput
        placeholder={t("أدخل دومين الشركة *")}
        rightSection={<img src={webIcon} width="20px" />}
        key={form.key("domain")}
        {...form.getInputProps("domain")}
      />
    </GridCol>
    <GridCol span={{ lg: 6 ,xs: 12 ,sm: 12 ,md:12 }}>
      <TextInput
        placeholder={t("أدخل الاسم الكامل *")}
        rightSection={<img src={person} width="20px" />}
        key={form.key("name")}
        {...form.getInputProps("name")}
      />
    </GridCol>
    <GridCol span={{  lg: 6 ,xs: 12 ,sm: 12 ,md:12 }}>
      <Select
        key={form.key("type")}
        {...form.getInputProps("type")}
        className="select"
        mt="md"
        comboboxProps={{ withinPortal: false }}
        data={["حكومية", "خاصة"]}
        placeholder={t("أدخل نوع الشركة *")}
        rightSection={<img src={typeicon} width="15px" />}
      />
    </GridCol>
    <GridCol span={{  lg: 6 ,xs: 12 ,sm: 12 ,md:12 }}>
      <TextInput
        placeholder={t("أدخل عدد موظفين الشركة *")}
        rightSection={<img src={numEmp} width="20px" />}
        key={form.key("employess_count")}
        {...form.getInputProps("employess_count")}
      />
    </GridCol>
    <GridCol  span={{  lg: 6 ,xs: 12 ,sm: 12 ,md:12 }}>
      <TextInput
        placeholder={t("أدخل البريد الإلكتروني *")}
        rightSection={<img src={message} width="20px" />}
        key={form.key("email")}
        {...form.getInputProps("email")}
      />
    </GridCol>
    <GridCol span={{  lg: 6 ,xs: 12 ,sm: 12 ,md:12 }}>
      <PasswordInput
        placeholder={t("أدخل كلمة المرور *")}
        key={form.key("password")}
        {...form.getInputProps("password")}
      />
    </GridCol>
    <GridCol offset={{lg:6,md:0,sm:0,xs:0}} span={{  lg: 6 ,xs: 12 ,sm: 12 ,md:12 }} style={{direction:'ltr'}}  >
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
  <Flex visibleFrom="md" w='60%' gap='1.25rem' justify='center' m="auto" mt={10}>
         <LoginButton />
        <Button fullWidth radius={10}  size="md" type="submit" variant="filled" color="#B21222">
          {t("انشاء حساب")}
        </Button>
    </Flex>
    <Grid hiddenFrom="md" gutter={10}>
    <GridCol span={12}>
    <LoginButton />
    </GridCol>
    <GridCol span={12}>
    <Button fullWidth radius={10}  size="md" type="submit" variant="filled" color="#B21222">
          {t("انشاء حساب")}
        </Button>
    </GridCol>
 </Grid>
</form>
  );
};
export default CompanyForm;