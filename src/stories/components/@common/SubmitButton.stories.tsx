import {
  default as Submit,
  SubmitButtonProps,
} from "@/components/SubmitButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "components/@common/Button",
  component: Submit,
  tags: ["autodocs"],
  decorators: [
    (Story, { parameters }) => (
      <div style={{ maxWidth: "200px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Submit>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SubmitButton: Story = {
  render: ({ isValid, text }: SubmitButtonProps) => {
    return <Submit isValid={isValid} text={text} />;
  },
  args: { isValid: true, text: "SubmitButton" },
  argTypes: {},
};
