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
<<<<<<< HEAD
        </>
    )
}
export default NetworkError

=======
    </>
  );
};
export default NetworkError;
>>>>>>> 5d2697ea26c72c6d0a42526c4b52fb270f7304f2
