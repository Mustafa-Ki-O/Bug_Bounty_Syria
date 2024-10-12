import { Anchor, Box, Button, Group, Stack } from "@mantine/core";
import linkImg from "../../assets/vectors/Vector (8).png";
import buildImg from "../../assets/vectors/Vector (10).png";
import users from "../../assets/vectors/Vector (9).png";
import visit from "../../assets/vectors/navigation-share.png";
import badge from "../../assets/vectors/Vector (6).png";
import { useTranslation } from "react-i18next";

const InfoCompany = ({id, name, domain, numEmployee, type, description,logo}) => {

  console.log(id)
  const { t } = useTranslation();

  return (
    <>
      <Stack>
        <Group justify="space-between" align="center">
          <div>
            <img src={badge} width={15} />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: "20px", fontWeight: "bold" }}>
              {name}
            </span>
            <img src={logo} width={35} height={35} style={{ borderRadius: "50%" }} />
          </div>
        </Group>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <Anchor
            href="https://mantine.dev"
            target="_blank"
            inherit
            justify="end"
            style={{ color: "black", marginRight: "10px" }}
          >
            {domain}
          </Anchor>
          <img src={linkImg} width={25} />
        </Box>
        <Box style={{ textAlign: "right" }}>
          <p style={{ fontSize: "13px", fontWeight: "bold" }}>{description}</p>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ marginRight: "10px" }}>{type}</p>
            <img src={buildImg} width={25} />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ marginRight: "10px" }}>{numEmployee}</p>
            <img src={users} width={25} />
          </div>
        </Box>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
        >

          <Button
            color="#B21222"
            ml={10}
            w={140}
            fw={700}
            onClick={() => window.open(`https://${domain}`, "_blank")}
          >
            <img src={visit} width={20} style={{ marginRight: "5px" }} />
            {t("زيارة الموقع")}
          </Button>
        </Box>
      </Stack>
    </>
  );
};

export default InfoCompany;