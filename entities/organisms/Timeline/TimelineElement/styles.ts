import styled from "styled-components";
import Image from "next/image";

export const Root = styled.div``;

export const Logo = styled(Image)`
  left: 50%;
  max-height: 75%;
  max-width: 75%;
  object-fit: contain;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;
