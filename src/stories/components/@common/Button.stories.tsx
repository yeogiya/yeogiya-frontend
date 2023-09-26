import { ButtonProps } from "@/components/@common/Button";
import { default as Button } from "@/components/@common/DefaultButton";
import theme from "@/styles/theme";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "components/@common/Button",
  component: Button,
  tags: ["autodocs"],
  decorators: [
    (Story, { parameters }) => (
      <div style={{ maxWidth: "200px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  render: (args: ButtonProps) => {
    return <Button {...args} />;
  },
  args: {
    type: "button",
    text: "Default Button",
    background: `${theme.color.white}`,
    color: `${theme.color.black50}`,
  },
  argTypes: {},
};
