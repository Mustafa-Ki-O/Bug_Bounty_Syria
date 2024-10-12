import {Modal,Button,Container,Group,TextInput,Textarea,} from "@mantine/core";
import iconName from "../../assets/vectors/VectorModal1.png";
import iconUrl from "../../assets/vectors/VectorModal2.png";
import { useTranslation } from "react-i18next";
import { useForm } from "@mantine/form";
import * as yup from "yup";
import { yupResolver } from "mantine-form-yup-resolver";
import useAddProduct from "../useMutation/company/useAddProduct";
import { useState,useEffect } from "react";

function AddProgramModal({ opened, close,setData, fetchData,setProgress }) {
  const { t } = useTranslation();

  const {addPro,isLoading} = useAddProduct(fetchData,setData);
  const [isSubmitted,setIsSubmitted] = useState(false)

  const schema = yup.object().shape({
    title: yup.string().min(2, t("الاسم يجب ان يحوي حرفين على الاقل")),
    url: yup.string().required(t("Invalid url")),
    description: yup.string().min(12, t("الوصف لا يقل عن 12 حرف")),
  });

  const form = useForm({
    mode: "uncontrolled",
    validateInputOnChange: true,
    initialValues: {
      title: "",
      description: "",
      url: "",
    },
    validate: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    if (form.isValid){
      const formData = new FormData();
      Object.keys(values).forEach((key) => {
        formData.append(key, values[key]);
      });
      setIsSubmitted(true)
      addPro(formData,fetchData);
      close()
    }

    const validated = form.validate();

    if (validated) {
      validated.errors; //Object with errors
    }
    form.reset();
  };

  useEffect(() => {
    if(isSubmitted){
     setProgress(isLoading)
    }
   },[isLoading])

  return (
    <>
      <Container p={20} style={{ position: "relative", margin: "auto" }}>
        <Modal.Root
          w="100%"
          style={{
            position: "absolute",
            right: 0,
          }}
          opened={opened}
          onClose={close}
        >
          <Modal.Overlay />
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Modal.Content radius={16} p={20}>
              <Modal.Header>
                <Modal.CloseButton />
              </Modal.Header>
              <h2
                style={{
                  textAlign: "center",
                  margin: "5px",
                  fontWeight: "bold",
                }}
              >
                {t("اضافة برنامج جديد")}
              </h2>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "14px",
                  color: "#9CA3AF",
                }}
              >
                {t("يرجى تعبئة الحقول المطلوبة لأضافة البرنامج")}
              </p>
              <Modal.Body>
                <Group justify="center" align="center">
                  <TextInput
                    data-autofocus
                    placeholder={t("اسم البرنامج*")}
                    rightSection={<img src={iconName} />}
                    w={318}
                    size="md"
                    radius="md"
                    style={{ direction: "rtl" }}
                    key={form.key("title")}
                    {...form.getInputProps("title")}
                  />
                  <TextInput
                    placeholder={t("رابط الرنامج*")}
                    rightSection={<img src={iconUrl} />}
                    w={318}
                    size="md"
                    radius="md"
                    style={{ direction: "rtl" }}
                    key={form.key("url")}
                    {...form.getInputProps("url")}
                  />
                  <Textarea
                    size="md"
                    placeholder={t("الوصف*")}
                    w={318}
                    radius="md"
                    style={{ direction: "rtl" }}
                    key={form.key("description")}
                    {...form.getInputProps("description")}
                  />
                </Group>
              </Modal.Body>
              <div
                style={{
                  padding: "20px",
                  display: "flex",
                  gap: "16px",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="outline"
                  color="#B21222"
                  w={130}
                  radius={8}
                  onClick={close}
                >
                  {t("الغاء")}
                </Button>
                <Button
                  type="submit"
                  variant="filled"
                  color="#B21222"
                  w={130}
                  radius={8}
                >
                  {t("اضافة")}
                </Button>
              </div>
            </Modal.Content>
          </form>
        </Modal.Root>
      </Container>
    </>
  );
}

export default AddProgramModal;
