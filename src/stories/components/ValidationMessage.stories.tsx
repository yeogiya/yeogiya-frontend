import {
  ValidateMessageProps,
  default as ValidateMsg,
} from "@/components/ValidateMessage";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "components/@common/Text",
  component: ValidateMsg,
  tags: ["autodocs"],
  decorators: [(Story, { parameters }) => <Story />],
} satisfies Meta<typeof ValidateMsg>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ValidateMessage: Story = {
  render: ({ color, children }: ValidateMessageProps) => {
    return <ValidateMsg color={color}>{children}</ValidateMsg>;
  },
  args: {
    color: "default" || "error" || "success",
    children: "validation message!",
  },
  argTypes: {
    color: {
      options: ["default", "error", "success"],
    },
  },
};
