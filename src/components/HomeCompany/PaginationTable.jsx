import { Pagination ,Flex } from "@mantine/core";

const PaginationTable = ({totalPages,setActivePage,activePage}) => {


  return (
  <>
  <Flex justify='end' px={50} mt={20}>
     <Pagination total={totalPages} 
        value={activePage} 
        onChange={setActivePage} 
        color="#b21222" 
        w="fit-content" />
  </Flex>
  </>
  )

};

export default PaginationTable;
