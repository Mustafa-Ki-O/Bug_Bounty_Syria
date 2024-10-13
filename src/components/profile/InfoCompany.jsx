import {
  Container,
  Stack,
  Image,
  Grid,
  Text,
  TextInput,
  Button,
  Textarea,
  Group,
  Flex,
  Select,
  FileButton,
} from "@mantine/core";
// import Progress from "../general/Progress";
import { useForm } from "@mantine/form";
import { useEffect, useState } from "react";
import updateImg from "../../assets/vectors/updateImg.png";
import { yupResolver } from "mantine-form-yup-resolver";
import person from "../../assets/vectors/Vector1.png";
import message from "../../assets/vectors/Vector2.png";
import users from "../../assets/vectors/VectorNum.png";
import webIcon from "../../assets/vectors/VectorWeb.png";
import typeicon from "../../assets/vectors/VectorType.png";
import "../../assets/css/info.css";
import * as yup from "yup";
import { useDisclosure } from "@mantine/hooks";
import logout from "../../assets/vectors/logout.png";
import ChangePasswordModalCompany from "./ChangePasswordModalCompany";
import LogoutModalCompany from "./LogoutModalCompany";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useFetchProfile from "../useMutation/company/useFetchProfile";
import useUpdateProfile from "../useMutation/company/useUpdateProfile";

const InfoCompany = ({ setProgress }) => {
  const { t } = useTranslation();
  const [selectedLogo, setSelectedLogo] = useState(null);
  // const [progress, setProgress] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const [openLogout, setOpenLogout] = useState(false);
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { fetchProfile, isLoadingFetch } = useFetchProfile();

  const schema = yup.object().shape({
    name: yup.string().min(2, t("الاسم يجب ان يحوي حرفين على الاقل")),
    email: yup.string().required(t("Invalid email")).email(t("ايميل خاطئ")),
    domain: yup.string().required(t("Invalid domain")),
    type: yup.string().required(t("Invalid type")),
    description: yup.string().min(12, t("الوصف لا يقل عن 12 حرف")),
    employess_count: yup.string().min(1, t("يحب ادخال رقم واحد على الاقل")),
  });

  const [company, setCompany] = useState({});

  // const fetchProfileData = () => {
  //   fetchDataCompanyProfile().then((res) => {
  //     setCompany(res.data.company);
  //   });
  // };

  useEffect(() => {
    fetchProfile(setCompany);
  }, []);

  useEffect(() => {
    console.log("isload");
    setProgress(isLoadingFetch);
  }, [isLoadingFetch]);

  const { update, isLoading } = useUpdateProfile(setCompany);

  const form = useForm({
    mode: "uncontrolled",
    validateInputOnChange: false,
    initialValues: {
      name: "",
      email: "",
      employess_count: "",
      domain: "",
      type: "",
      description: "",
      logo: null,
    },
    validate: yupResolver(schema),
  });

  useEffect(() => {
    if (company) {
      form.setValues({
        name: company.name,
        email: company.email,
        employess_count: company["employess_count"],
        domain: company.domain,
        type: company.type,
        description: company.description,
        logo: company.logo,
      });
    }
  }, [company]);

  const handleFileChange = (file) => {
    setSelectedLogo(file);
    console.log(selectedLogo);
  };

  const handleSubmit = () => {
    if (form.isValid) {
      const values = form.getValues();
      const formData = new FormData();
      Object.keys(values).forEach((key) => {
        if (key !== "logo") {
          formData.append(key, values[key]);
        }
      });
      if (selectedLogo) {
        formData.append("logo", selectedLogo);
      }
      setIsSubmitted(true);
      update(formData);
    }

    const validated = form.validate();

    if (validated) {
      validated.errors; //Object with errors
    }
    form.reset();
  };

  useEffect(() => {
    if (isSubmitted) {
      setProgress(isLoading);
    }
  }, [isLoading]);

  return (
    <>
      <Container
        className="profile"
        p={20}
        style={{ margin: "auto", position: "relative" }}
        my={10}
      >
        {
          <ChangePasswordModalCompany
            opened={opened}
            close={close}
            setProgress={setProgress}
          />
        }
        {
          <LogoutModalCompany
            openLogout={openLogout}
            setOpenLogout={setOpenLogout}
            setProgress={setProgress}
          />
        }
        <Stack p={50} w="80%" m="auto" justify="center" align="center">
          <Stack w="100%" mb={30} style={{ placeItems: "center" }}>
            <Group w="100%" justify="flex-end">
              <div style={{ position: "relative", margin: "auto" }}>
                <Image
                  src={company?.logo}
                  w={100}
                  h={100}
                  radius={50}
                  style={{
                    border: "1px solid red",
                    margin: "auto",
                  }}
                />
                <FileButton
                  onChange={handleFileChange}
                  w={20}
                  accept="image/png, image/jpeg"
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                  }}
                >
                  {(props) => <Image src={updateImg} {...props} />}
                </FileButton>
              </div>
              <Image
                src={logout}
                w={20}
                style={{
                  position: "absolute",
                  alignSelf: "flex-start",
                  cursor: "pointer",
                }}
                onClick={() => setOpenLogout(true)}
              />
            </Group>
            <Text size="sm" fs={18} fw={700}>
              {t("اختر صورة جديدة")}
            </Text>
          </Stack>
          <form
            onSubmit={form.onSubmit(handleSubmit)}
            style={{ width: "100%", marginTop: 20 }}
          >
            <Grid justify="center" gutter={25} dir="rtl">
              <Grid.Col span={6}>
                <TextInput
                  placeholder={t("أدخل الاسم الكامل *")}
                  rightSection={<img src={person} width="20px" />}
                  key={form.key("name")}
                  {...form.getInputProps("name")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  placeholder={t("أدخل البريد الإلكتروني *")}
                  rightSection={<img src={message} width="20px" />}
                  key={form.key("email")}
                  {...form.getInputProps("email")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput
                  placeholder={t("أدخل دومين الشركة *")}
                  rightSection={<img src={webIcon} width="20px" />}
                  key={form.key("domain")}
                  {...form.getInputProps("domain")}
                />
              </Grid.Col>
              <Grid.Col span={6}>
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
              </Grid.Col>
              <Grid.Col offset={6} span={6}>
                <TextInput
                  placeholder={t("أدخل عدد موظفي الشركة *")}
                  rightSection={<img src={users} width="20px" />}
                  key={form.key("employess_count")}
                  {...form.getInputProps("employess_count")}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <Textarea
                  size="md"
                  radius="md"
                  key={form.key("description")}
                  placeholder={t("صف نفسك ...")}
                  {...form.getInputProps("description")}
                />
              </Grid.Col>
            </Grid>
            <Stack>
              <Text
                fz={10}
                td="underline"
                fw={700}
                style={{ alignSelf: "flex-end", cursor: "pointer" }}
                onClick={open}
              >
                {t("تغيير كلمة المرور")}
              </Text>
              <Flex justify="center" gap={10}>
                <Button
                  size="sm"
                  variant="outline"
                  color="#B21222"
                  onClick={() => navigate("/addProgram")}
                >
                  {t("إضافة / حذف برنامج")}
                </Button>
                <Button
                  type="submit"
                  size="sm"
                  variant="filled"
                  color="#B21222"
                >
                  {t("حفظ التغييرات")}
                </Button>
              </Flex>
            </Stack>
          </form>
        </Stack>
      </Container>
    </>
  );
};
export default InfoCompany;
