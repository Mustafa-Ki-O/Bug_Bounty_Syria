import { AspectRatio, Title } from "@mantine/core";
import networkError from "../../assets/webVideos/network-error.mp4";
const NetworkError = () => {
  return (
    <>
      <Title order={1} my={30} ta="center">
        الاتصال بالانترنت مقطوع
      </Title>
      <AspectRatio w="30%" m="auto">
        <video src={networkError} autoPlay loop>
          <p>there is a problem.</p>
        </video>
      </AspectRatio>
    </>
  );
};
export default NetworkError;
