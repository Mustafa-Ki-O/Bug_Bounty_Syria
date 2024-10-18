import { AspectRatio } from "@mantine/core";

const InternalServer = () => {
  return (
    <>
      <AspectRatio w="60%" m="auto" ratio={16 / 9}>
        <iframe
          src="https://lottie.host/embed/3a4c9f23-9421-483a-bdf9-2f83b5146adb/pPKIAPrhH1.json"
          style={{ border: "none" }}
        ></iframe>
      </AspectRatio>
    </>
  );
};
export default InternalServer;
