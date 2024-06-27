import styled from "styled-components";
import { colors, fontSizes, globalInputMaxWidth, sizes } from "@/entities";
import { rem, rgba } from "polished";

const fieldHeight = sizes.s40.rem;

const inValidStyles = {
  background: rgba(colors.redHeat, 0.15),
};

export const Root = styled.select<{ $isInvalid: boolean; multiple?: boolean }>`
  appearance: none;
  background-color: ${({ $isInvalid }) =>
    $isInvalid ? inValidStyles.background : colors.greyDark};
  background-image: ${({ multiple }) =>
    multiple
      ? "none"
      : `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22${colors.greenGrass.replace(
          "#",
          "%23"
        )}%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")`};
  background-position: right ${sizes.s8.rem} top 50%;
  background-repeat: no-repeat;
  background-size: ${sizes.s16.rem} auto;
  border: ${rem(1)} solid ${colors.greenGrass};
  color: ${colors.whiteGhost};
  display: block;
  font-size: ${fontSizes.medium.rem};
  height: ${({ multiple }) => (multiple ? "auto" : fieldHeight)};
  margin: ${sizes.s2.rem} auto 0;
  max-width: ${rem(globalInputMaxWidth)};
  padding: ${sizes.s8.rem};
  position: relative;
  width: 100%;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: ${colors.whiteGhost};
    -webkit-box-shadow: 0 0 0 ${fieldHeight}
      ${({ $isInvalid }) =>
        $isInvalid ? inValidStyles.background : colors.greyDark}
      inset;
  }

  &:user-invalid {
    background: ${inValidStyles.background};
  }
`;
