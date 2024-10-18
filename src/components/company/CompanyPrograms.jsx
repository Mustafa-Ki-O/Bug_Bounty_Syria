import { Text } from "@mantine/core";
// import data from "../home/data.json";
import TablePrograms from "./TablePrograms";
import { useTranslation } from "react-i18next";

const CompanyPrograms = ({ companyPrograms, setProgress }) => {
  const { t } = useTranslation();

  return (
    <>
      <Text size="md" fw={700} c="#1D1D1B" mt={40} mr={20} ta="end">
        {t("برامج الشركة")}
      </Text>

      <TablePrograms data={companyPrograms} setProgress={setProgress} />
    </>
  );
};
export default CompanyPrograms;
