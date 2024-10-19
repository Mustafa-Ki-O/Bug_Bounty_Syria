import { Drawer, Button, GridCol } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { Grid, Image } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import notification from "../../assets/vectors/Vector (7).png";
import { LanguagePicker } from "./languageSwitcherMantine";

const DrawerNav = ({ opened, close }) => {
  const location = useLocation();

  const navigate = useNavigate();
  const { t } = useTranslation();

  const company = JSON.parse(localStorage.getItem("company"));
  const comImg = company && company.data.company.logo;

  const researcher = JSON.parse(localStorage.getItem("researcher"));
  const resImg = researcher && researcher.data.researcher.image;

  let image = null;
  if (comImg) {
    image = comImg;
  } else {
    image = resImg;
  }
  return (
    <>
      <Drawer
        size={window.innerWidth / 2}
        opened={opened}
        onClose={close}
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
        <Grid>
          {location.pathname === "/" || location.pathname === "/login" ? (
            <>
              <GridCol>
                <Button
                  fullWidth
                  variant="outline"
                  color="#B21222"
                  size="md"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  {t("دخول")}
                </Button>
              </GridCol>
              <GridCol>
                <Button
                  fullWidth
                  variant="filled"
                  color="#B21222"
                  size="md"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  {t("سجل مجاناً")}
                </Button>
              </GridCol>
            </>
          ) : (
            <>
              <Grid mt={30} gutter={20} justify="center" align="center">
                <GridCol  span={6} >
                  <Image
                    radius="50%"
                    w={70}
                    h={70}
                    src={image}
                    onClick={()=>navigate('/profile')}
                    style={{
                      cursor: "pointer",
                      border: "1px solid red",
                      boxShadow: "0 3px 4px 0px #000",
                    }}
                  />
                </GridCol>
                <GridCol span={6} p={0}>
                  <h2 style={{ color: "#b21222" }}>
                    {company
                      ? company.data.company.name
                      : researcher? researcher.data.researcher.name :'لا يوجد مستخدم'}
                  </h2>
                </GridCol>
                <GridCol mt={15}>
                  <Button fullWidth variant="outline" color="#B21222">
                    الاشعارات
                    <Image
                      mx={10}
                      radius="50%"
                      w={20}
                      src={notification}
                      style={{ cursor: "pointer" }}
                    />
                  </Button>
                </GridCol>
                <GridCol>
                  <Button
                    fullWidth
                    variant="filled"
                    color="#B21222"
                    fz={18}
                    fw={700}
                    onClick={() => navigate("/gabs")}
                  >
                    {t("الثغرات المكتشفة")}
                  </Button>
                </GridCol>
                <GridCol>
                  <Button
                    fullWidth
                    variant="filled"
                    color="#B21222"
                    fz={18}
                    fw={700}
                    onClick={() => navigate("/home")}
                  >
                    {t("الصفحة الرئيسية")}
                  </Button>
                </GridCol>
              </Grid>
            </>
          )}
          <Grid mt={20}>
            <GridCol offset={16}>
              <LanguagePicker />
            </GridCol>
          </Grid>
        </Grid>
      </Drawer>
    </>
  );
};
export default DrawerNav;
