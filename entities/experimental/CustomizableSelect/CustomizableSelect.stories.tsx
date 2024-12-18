import { Meta, StoryObj } from "@storybook/react";
import { CustomizableSelect } from "./CustomizableSelect";
import { Figure } from "@/entities/experimental/SelectList/styles";
import Image from "next/image";
import amLogo from "@/entities/assets/am.svg";
import { ErrorText, Paragraph, sizes } from "@/entities";
import styled from "styled-components";

const DoesNotSupport = styled.div`
  display: block;
  @supports (appearance: base-select) {
    display: none;
  }
`;
const DoesSupport = styled.div`
  display: none;
  @supports (appearance: base-select) {
    display: block;
  }
`;

const meta: Meta<typeof CustomizableSelect> = {
  component: CustomizableSelect,
  render: (args) => (
    <>
      <DoesNotSupport>
        <ErrorText>
          You need to enable Experimental Web Platform features in your browser
          to view this component - <code>chrome://flags/</code>
        </ErrorText>
      </DoesNotSupport>
      <DoesSupport>
        <CustomizableSelect {...args} />
      </DoesSupport>
    </>
  ),
  argTypes: {
    defaultValue: {
      control: {
        type: "number",
      },
    },
  },
  args: {
    children: (
      <>
        <option value={1}>
          <Figure>
            <Image
              src={amLogo}
              alt="am Logo"
              height={sizes.s16.raw}
              width={sizes.s16.raw}
            />
          </Figure>
          <Paragraph margin={0}>Option 1</Paragraph>
        </option>
        <option value={2}>
          <Figure>
            <Image
              src={amLogo}
              alt="am Logo"
              height={sizes.s16.raw}
              width={sizes.s16.raw}
            />
          </Figure>
          <Paragraph margin={0}>Option 2</Paragraph>
        </option>
        <option value={3}>
          <Figure>
            <Image
              src={amLogo}
              alt="am Logo"
              height={sizes.s16.raw}
              width={sizes.s16.raw}
            />
          </Figure>
          <Paragraph margin={0}>Option 3</Paragraph>
        </option>
      </>
    ),
    defaultValue: 2,
  },
};

export default meta;

export const Default: StoryObj<typeof CustomizableSelect> = {};
