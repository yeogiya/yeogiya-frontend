import {
  default as CheckBtn,
  CheckButtonProps,
} from "@/components/CheckButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "components/@common/Button",
  component: CheckBtn,
  tags: ["autodocs"],
  decorators: [
    (Story, { parameters }) => (
      <div style={{ marginTop: "100px", marginLeft: "-200px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CheckBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckButton: Story = {
  render: ({ isActive, text, type, onClick }: CheckButtonProps) => {
    return (
      <CheckBtn isActive={isActive} text={text} type={type} onClick={onClick} />
    );
  },
  args: {
    isActive: true,
    type: "button",
    text: "중복확인",
    onClick: () => {},
  },
  argTypes: {},
};
