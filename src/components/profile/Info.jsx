import {
  Container,
  Stack,
  Image,
  Grid,
  Text,
  FileButton,
  TextInput,
  Button,
  Textarea,
  Group,
  Tooltip,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEffect, useState } from "react";
import { yupResolver } from "mantine-form-yup-resolver";
import person from "../../assets/vectors/Vector1.png";
import message from "../../assets/vectors/Vector2.png";
import phone from "../../assets/vectors/Vector3.png";
import updateImg from "../../assets/vectors/updateImg.png";
import "../../assets/css/info.css";
import * as yup from "yup";
import { useDisclosure } from "@mantine/hooks";
import logout from "../../assets/vectors/logout.png";
import ChangePasswordModal from "./ChangePasswordModal";
import LogoutModal from "./LogoutModal";
import { useTranslation } from "react-i18next";
import useUpdateProfile from "../useMutation/researcher/useUpdateProfile";
import useFetchProfile from "../useMutation/researcher/useFetchProfile";

const Info = ({ setProgress }) => {
  const { t } = useTranslation();
  const [researcher, setResearcher] = useState({});
  const [opened, { open, close }] = useDisclosure(false);
  const [openLogout, setOpenLogout] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const { fetchProfile, isLoadingFetch } = useFetchProfile();
  const { update, isLoading } = useUpdateProfile(setResearcher);

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    fetchProfile(setResearcher);
  }, []);

  useEffect(() => {
    setProgress(isLoadingFetch);
  }, []);

  const schema = yup.object().shape({
    name: yup.string().min(2, t("الاسم يجب ان يحوي حرفين على الاقل")),
    email: yup.string().required(t("Invalid email")).email(t("ايميل خاطئ")),
    phone: yup.string().min(10, t("الرقم لا يقل عن 10 أرقام")),
    description: yup.string().min(12, t("الوصف لا يقل عن 12 حرف")),
  });

  const form = useForm({
    mode: "uncontrolled",
    validateInputOnChange: false,
    initialValues: {
      name: "",
      email: "",
      phone: "",
      code: "",
      description: "",
      image: null,
    },
    validate: yupResolver(schema),
  });

  useEffect(() => {
    if (researcher) {
      form.setValues({
        name: researcher.name,
        email: researcher.email,
        phone: researcher.phone,
        code: researcher.code,
        image: researcher.image,
        description: researcher.description,
      });
    }
  }, [researcher]);

  const handleFileChange = (file) => {
    setSelectedImage(file);
    console.log(selectedImage);
  };

  const handleSubmit = () => {
    if (form.isValid) {
      const values = form.getValues();
      const formData = new FormData();
      Object.keys(values).forEach((key) => {
        if (key !== "image") {
          formData.append(key, values[key]);
        }
      });
      if (selectedImage) {
        formData.append("image", selectedImage);
      }
      setIsSubmitted(true);
      update(formData);
    }

    const validated = form.validate();

    if (validated) {
      validated.errors;
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
        mb={80}
        style={{ margin: "auto", position: "relative" }}
      >
        {
          <ChangePasswordModal
            opened={opened}
            close={close}
            setProgress={setProgress}
          />
        }
        {
          <LogoutModal
            openLogout={openLogout}
            setOpenLogout={setOpenLogout}
            setProgress={setProgress}
          />
        }
        <Stack
          p={{ lg: 50, md: 10, sm: 0 }}
          w="100%"
          m="auto"
          justify="center"
          align="center"
        >
          <form
            onSubmit={form.onSubmit(handleSubmit)}
            style={{ width: "100%", marginTop: 20 }}
          >
            <Stack w="100%" mb={30} style={{ placeItems: "center" }}>
              <Group w="100%" justify="flex-end">
                <div style={{ position: "relative", margin: "auto" }}>
                  <Image
                    src={researcher.image}
                    w={100}
                    h={100}
                    radius={50}
                    style={{ border: "1px solid red", margin: "auto" }}
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
                <Tooltip label="Log-out" color="#b21222">
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
                </Tooltip>
              </Group>
              <Text size="sm" fs={18} fw={700}>
                {t("اختر صورة جديدة")}
              </Text>
            </Stack>

            <Grid justify="center" gutter={25} dir="rtl">
              <Grid.Col span={{ lg: 6, md: 12 }}>
                <TextInput
                  placeholder={t("أدخل الاسم الكامل *")}
                  rightSection={<img src={person} width="20px" />}
                  key={form.key("name")}
                  {...form.getInputProps("name")}
                />
              </Grid.Col>
              <Grid.Col span={{ lg: 6, md: 12 }}>
                <TextInput
                  placeholder={t("أدخل البريد الإلكتروني *")}
                  rightSection={<img src={message} width="20px" />}
                  key={form.key("email")}
                  {...form.getInputProps("email")}
                />
              </Grid.Col>
              <Grid.Col span={{ lg: 6, md: 12 }}>
                <TextInput
                  placeholder={t("أدخل رقم الهاتف *")}
                  rightSection={<img src={phone} width="20px" />}
                  key={form.key("phone")}
                  {...form.getInputProps("phone")}
                />
              </Grid.Col>
              <Grid.Col span={{ lg: 6, md: 12 }}>
                <TextInput
                  disabled
                  key={form.key("code")}
                  {...form.getInputProps("code")}
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
            <Text
              size="sm"
              td="underline"
              mt={20}
              fw={700}
              ta="right"
              style={{ cursor: "pointer" }}
              onClick={open}
            >
              {t("تغيير كلمة المرور")}
            </Text>
            <Button
              type="submit"
              mt={25}
              w="30%"
              miw="120px"
              size="sm"
              variant="filled"
              color="#B21222"
            >
              {t("حفظ التغييرات")}
            </Button>
          </form>
        </Stack>
      </Container>
    </>
  );
};
export default Info;
