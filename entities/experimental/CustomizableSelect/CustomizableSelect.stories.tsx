import { Meta, StoryObj } from "@storybook/nextjs";
import { CustomizableSelect } from "./CustomizableSelect";
import Image from "next/image";
import amLogo from "@/entities/assets/am.svg";
import { ErrorText, Paragraph } from "@/entities";
import styles from "./CustomizableSelect.module.css";
import { sizes } from "../../../app/styles/tokens";

const meta: Meta<typeof CustomizableSelect> = {
  component: CustomizableSelect,
  render: (args) => (
    <>
      <div className={styles.doesNotSupport}>
        <ErrorText>
          You need to enable Experimental Web Platform features in your browser
          to view this component - <code>chrome://flags/</code>
        </ErrorText>
      </div>
      <div className={styles.doesSupport}>
        <CustomizableSelect {...args} />
      </div>
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
          <figure className={styles.figure}>
            <Image
              src={amLogo}
              alt="am Logo"
              height={sizes.size16}
              width={sizes.size16}
            />
          </figure>
          <Paragraph margin={0}>Option 1</Paragraph>
        </option>
        <option value={2}>
          <figure className={styles.figure}>
            <Image
              src={amLogo}
              alt="am Logo"
              height={sizes.size16}
              width={sizes.size16}
            />
          </figure>
          <Paragraph margin={0}>Option 2</Paragraph>
        </option>
        <option value={3}>
          <figure className={styles.figure}>
            <Image
              src={amLogo}
              alt="am Logo"
              height={sizes.size16}
              width={sizes.size16}
            />
          </figure>
          <Paragraph margin={0}>Option 3</Paragraph>
        </option>
      </>
    ),
    defaultValue: 2,
  },
};

export default meta;

export const Default: StoryObj<typeof CustomizableSelect> = {};
