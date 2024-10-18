import { useTranslation } from "react-i18next";
import {
  Stack,
  Container,
  TextInput,
  Text,
  Button,
  Image,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useEffect, useState } from "react";

const Search = ({ researchers, setFilteredResearchers }) => {
  const { t } = useTranslation();

  const [searchTerm, setSearchTerm] = useState();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (!searchTerm) {
      setFilteredResearchers(researchers);
    } else {
      const filtered =
        researchers &&
        researchers.filter((researcher) => {
          const name = researcher.name.toLowerCase();
          const searchTermLower = searchTerm.toLowerCase();

          return name.includes(searchTermLower);
        });
      setFilteredResearchers(filtered);
    }
  }, [searchTerm, researchers]);

  return (
    <>
      <Container fluid w="100%" my={30}>
        <Stack align="end">
          <Container
            fluid
            pb={10}
            w="100%"
            bg="#F9F9F9"
            style={{
              boxShadow: "0px 3px 10px 0 #000",
              display: "flex",
              placeItems: "end",
              gap: 5,
              borderRadius: 5,
            }}
          >
            <TextInput
              label={
                <Text mb={8} size="md" c="#B21222" fw={800}>
                  {t("مئات الباحثين الامنيين ..هل تبحث عن أحد ؟؟")} !
                </Text>
              }
              mt="sm"
              placeholder={t("... ابحث عن االباحث الأفضل")}
              style={{
                width: "100%",
                textAlign: "start",
                direction: "rtl",
                marginTop: 0,
              }}
              rightSection={<IconSearch width={20} />}
              onChange={handleSearch}
              value={searchTerm}
            />
          </Container>
        </Stack>
      </Container>
    </>
  );
};
export default Search;
