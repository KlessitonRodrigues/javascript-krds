import styled, { keyframes } from "styled-components";

const rotate2d = keyframes`
  to {
    // rotate (z: clockwise)
    transform: rotate(360deg);
  }
`;

const rotate3d = keyframes`
  to {
    // rotate (x: up/down, y: left/right, z: clockwise, k: degrees)
    transform: rotate3d(50, 0, 0, 90deg);
  }
`;

const RotateX50andZ360 = keyframes`
  to {
    transform: rotateZ(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem 1rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem 1rem;
`;

export const Square = styled.div`
  padding: 2rem;
  background-color: #6666;
  border-radius: 0.4rem;
  font-size: 1.8rem;
`;

export const RotateSquare2D = styled(Square)`
  animation: ${rotate2d} 3s alternate infinite;
`;

export const RotateSquare3D = styled(Square)`
  animation: ${rotate3d} 3s alternate infinite;
`;

export const RotateSquareX50andZ360 = styled(Square)`
  animation: ${RotateX50andZ360} 3s alternate infinite;
`;
