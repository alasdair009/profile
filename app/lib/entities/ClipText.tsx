"use client";

import styled from "styled-components";
import {rem} from "polished";

export const ClipText = styled.span`
  align-items: center;
  //background: black;
  display: flex;
  font-size: ${rem(56)};
  height: 100%;
  justify-content: center;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  background: black;
  color: white;
`;