import image from '../../assets/vectors/image.png'
import { Image } from '@mantine/core';
const ImageRes = () => {
  return (
    <>
      <Image
        src={image}
        w="100%"
        radius={30}
      />
    </>
  );
};
export default ImageRes;
