import { AspectRatio, Title } from "@mantine/core";

const Unauthorized = () => {
  return (
    <>
      <Title order={1} my={30} ta="center">
        لا يوجد صلاحيات لك بالوصول
      </Title>
      <AspectRatio w="60%" m="auto" ratio={16 / 9}>
        <iframe
          src="https://lottie.host/embed/036d1cb9-04a8-4bd1-aa16-4940d54336e4/pNGhmzoYDB.json"
          style={{ border: "none" }}
        ></iframe>
      </AspectRatio>
    </>
  );
};
export default Unauthorized;
