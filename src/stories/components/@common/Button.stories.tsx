import Button from "@/components/@common/Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "components/@common/Button",
  component: Button,
  tags: ["autodocs"],
  decorators: [
    (Story, { parameters }) => (
      <div style={{ width: "328px", padding: "13px 80px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return <Button {...args} />;
  },
  args: {
    type: "button",
    text: "Default",
    background: "black",
    justifyContent: "center",
  },
  argTypes: {
    type: {
      control: {
        type: "button",
      },
    },
  },
};
