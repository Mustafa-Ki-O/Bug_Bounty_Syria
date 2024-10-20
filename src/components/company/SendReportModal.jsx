import {
  Button,
  Container,
  Group,
  Modal,
  Stack,
  TextInput,
  FileInput
} from "@mantine/core";
import icon from "../../assets/vectors/vector8.png";
import sendIcon from "../../assets/vectors/vector9.png";
import { useTranslation } from "react-i18next";
import { useForm } from "@mantine/form";
import { yupResolver } from "mantine-form-yup-resolver";
import * as yup from "yup";
import { useEffect } from "react";
import usePostBug from "../useMutation/researcher/usePostBug";

function SendReportModal({ opened, close, uuid ,setProgress}) {
  const { t } = useTranslation();
  const { postBug , isLoadingPost } = usePostBug();
  const schema = yup.object().shape({
    title:yup.string().min(2,'يجب ان يحوي العنوان على حرفين على الاقل'),
    report_file: yup.mixed().test('fileType', 'Invalid file type', (value) => {
      if (!value) return false;
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      return allowedTypes.includes(value.type);
    })
  })

  const form = useForm({
    mode:'uncontrolled',
    validateInputOnChange:false,
    initialValues:{
      product_uuid: '',
      title : '',
      report_file : null
    },
    validate:yupResolver(schema)
  })
     useEffect(() => {
       if (uuid) {
         form.setValues({ product_uuid: uuid });
       }
     }, [uuid]);


  const handleSubmit = () => {
    if(form.isValid){
      const values = form.getValues();
      const newFormData = new FormData();
      console.log(values.report_file)
      Object.keys(values).forEach((key)=>{
        newFormData.append(key,values[key])
      });
      console.log(values);
      postBug(newFormData);
      close();
    }
    const validated = form.validate();
    if(validated){
      validated.errors
    } 
    form.reset();
  }
  useEffect(()=>{
    setProgress(isLoadingPost)
  },[isLoadingPost])

  return (
    <>
      <Container p={20} style={{ position: "relative", margin: "auto" }}>
        <Modal
          w="100%"
          radius={16}
          opened={opened}
          onClose={close}
          overlayProps={{
            backgroundOpacity: 0.55,
            blur: 2,
          }}
          style={{ position: "absolute", right: 0 }}
        >
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack align="center" p={20} gap={20}>
              <h3 style={{ marginTop: 0 }}>{t("رفع تقرير جديد")}</h3>
              <TextInput
                data-autofocus
                radius={10}
                style={{ direction: "rtl" }}
                w={250}
                key={form.key('title')}
                placeholder={t("أدخل اسم التقرير")}
                rightSection={<img src={icon} width="20px" />}
                {...form.getInputProps('title')}
              />
              <FileInput
                 style={{ direction: "rtl" }}
                 radius="md"
                 w={250}
                 key={form.key('report_file')}
                 rightSection={<img src={sendIcon} width={20}/>}
                 {...form.getInputProps('report_file')}
                  />
              <Group w='100%' justify="space-evenly">
                <Button onClick={close} variant="outline" color="#B21222">
               {t("الغاء الارسال")}
                </Button>
                <Button type="submit" color="#B21222">
                {t("ارسال التقرير")}
                </Button>
              </Group>
            </Stack>
          </form>
        </Modal>
      </Container>
    </>
  );
}

export default SendReportModal;