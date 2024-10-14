import { Text} from "@mantine/core";
import { useTranslation } from "react-i18next";
import TableReports from "./TableReports";

const Reports = ({resReports}) => {
  const { t } = useTranslation();

  
  return (
    <>
      <Text size="md" fw={700} c="#1D1D1B" mt={40} mr={20} ta="end">
       {t("أرشيف الثفرات المقبولة")}
      </Text>

      <TableReports data={resReports}  />
    </>
  );
};
export default Reports