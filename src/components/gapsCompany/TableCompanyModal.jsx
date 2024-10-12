import { Modal, Button, Container, Group, Rating } from "@mantine/core";
import { useTranslation } from "react-i18next";
// import image from "../../../assets/images/Clip path group.png";
function TableCompanyModal({ opened, close }) {
  const { t } = useTranslation();

  return (
    <>
      <Container p={20} style={{ position: "relative", margin: "auto" }}>
        <Modal.Root
          w="100%"
          radius={16}
          style={{
            position: "absolute",
            right: 0,
          }}
          opened={opened}
          onClose={close}
        >
          <Modal.Overlay />
          <Modal.Content>
            <Modal.Header>
              <Modal.CloseButton />
            </Modal.Header>
            <h2
              style={{ textAlign: "center", margin: "5px", fontWeight: "bold" }}
            >
              {t("تقييم الثغرة")}
            </h2>
            <p
              style={{
                textAlign: "center",
                fontSize: "14px",
                color: "#9CA3AF",
              }}
            >
              {t("يرجى تقييم الثغرة من اصل")} 5
            </p>
            <Modal.Body bg="#eee" p={30}>
              <Group justify="center" align="center">
                <Rating fractions={3} defaultValue={3} size="xl" />
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
                {t("رجوع")}
              </Button>
              <Button variant="filled" color="#B21222" w={130} radius={8}>
                {t("ارسال التقييم")}
              </Button>
            </div>
          </Modal.Content>
        </Modal.Root>
      </Container>
    </>
  );
}

export default TableCompanyModal;