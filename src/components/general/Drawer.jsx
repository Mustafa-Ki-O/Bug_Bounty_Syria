import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { Flex,Grid ,Image,Group} from '@mantine/core';
import LanguageSwitcher from './languageSwitcher';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import vector from "../../assets/vectors/Vector.png";
import { useLocation } from "react-router-dom";
import profile from "../../assets/vectors/Vector1.png";
import notification from "../../assets/vectors/Vector (7).png";

const DrawerNav = ({opened,close}) => {

  const location = useLocation();

  const navigate = useNavigate();
  const {t} = useTranslation();

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
            <Grid>
              <Button
                variant="outline"
                color="#B21222"
                size="md"
                onClick={() => {
                  navigate("/login");
                }}
              >
                {t("دخول")}
              </Button>
              <Button
                variant="filled"
                color="#B21222"
                size="md"
                onClick={() => {
                  navigate("/");
                }}
              >
                {t("سجل مجاناً")}
              </Button>
            </Grid>
          ) : (
            <>
                  <Group gap={0} style={{display:'grid'}}>
                    <Button
                      fz={18}
                      fw={700}
                      onClick={() => navigate("/profile")}
                    >
                      <Image
                        src={profile}
                        radius="50%"
                        style={{
                          cursor: "pointer",
                          border: "1px solid red",
                          width: "30px",
                          padding: 5,
                        }}
                      />
                      </Button>    
                      <Image
                        src={notification}
                        w={20}
                        style={{ cursor: "pointer" }}
                      />
                  </Group>
                  <Group>
                    <Button
                      fz={18}
                      fw={700}
                      onClick={() => navigate("/gabs")}
                    >
                      {t("الثغرات المكتشفة")}
                      </Button>

                    <Button
                      fz={18}
                      fw={700}
                      onClick={() => navigate("/home")}
                    >
                      {t("الصفحة الرئيسية")}
                    </Button>
                  </Group>
            </>
          )}
          <Flex align="center">
          <LanguageSwitcher />
            <Link to="/home">
              <Image src={vector} width={100} p={10} />
            </Link>
          </Flex>
          </Grid>
      </Drawer>
    </>
  );
}
export default DrawerNav