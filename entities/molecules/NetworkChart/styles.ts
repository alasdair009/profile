import styled from "styled-components";
import { rem } from "polished";
import { colors, sizes } from "@/entities";

export const Root = styled.div`
  border: ${rem(1)} solid ${colors.greenGrass};
  min-height: ${sizes.s1024.rem};
  max-height: 100vh;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;
