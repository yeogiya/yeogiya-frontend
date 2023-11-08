import { KakaoLogo } from "@/assets";
import {
  IconButtonProps,
  default as WithIconButton,
} from "@/components/IconButton";
import theme from "@/styles/theme";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "components/@common/Button",
  component: WithIconButton,
  tags: ["autodocs"],
  decorators: [
    (Story, { parameters }) => (
      <div style={{ maxWidth: "328px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof WithIconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconButton: Story = {
  render: ({ type, text, icon, background, border }: IconButtonProps) => {
    return (
      <WithIconButton
        type={type}
        text={text}
        icon={icon}
        background={background}
        border={border}
      />
    );
  },
  args: {
    type: "button",
    text: "Button with Icon",
    icon: <KakaoLogo />,
    background: `${theme.color.black30}`,
  },
  argTypes: {},
};
