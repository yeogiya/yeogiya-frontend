import Button from "@/components/@common/Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "@common/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Primary",
  },
};
