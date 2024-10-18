import { Group, Container } from "@mantine/core";
import ImageRes from "./ImageRes";
import InfoRes from "./InfoRes";

const SelectedRes = ({ selectedRes }) => {
  const { uuid, name, description, email, phone, image, points } = selectedRes;

  return (
    <Group p={0}>
      <Container visibleFrom="sm" w={600} h={400}>
        <ImageRes />
      </Container>
      <Container w={600} h={350} p={0}>
        <InfoRes
          id={uuid}
          image={image}
          name={name}
          description={description}
          points={points}
          phone={phone}
          email={email}
        />
      </Container>
    </Group>
  );
};
export default SelectedRes;
