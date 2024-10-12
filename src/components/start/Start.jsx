import styled from 'styled-components';
import { Container } from "@mantine/core";
import vector from '../../assets/vectors/Vector.png'
import { Image } from '@mantine/core';

const AnimatedImage = styled(Image)`
  animation: scale 2s infinite linear;
  width:150px;
  margin:auto;
  @keyframes scale {
    0% {
      transform: scale(1);
      filter: drop-shadow(0px 2px 3px #1D1D1B);
    }
    25% {
      transform: scale(1.1);
      filter: drop-shadow(0px 4px 6px #1D1D1B);
    }
    50% {
      transform: scale(1);
      filter: drop-shadow(0px 2px 3px #1D1D1B);
    }
    75% {
      transform: scale(0.8);
      filter: drop-shadow(0px 4px 6px #1D1D1B);
    }
    100% {
      transform: scale(1);
      filter: drop-shadow(0px 2px 3px #1D1D1B);
    }
  }
`;

const Start = () => {
  return (
    <Container fluid h='100vh' style={{display:'flex',alignItems:'center'}}>
      <AnimatedImage src={vector}  />
    </Container>
  );
};
export default Start