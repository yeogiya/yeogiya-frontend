import { ConcealIcon } from "@/assets";
import InputUser, { InputUserProps } from "@/components/@common/InputUser";
import { useArgs } from "@storybook/client-api";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "components/@common/Input",
  component: InputUser,
  tags: ["autodocs"],
  decorators: [
    (Story, { parameters }) => (
      <div style={{ maxWidth: "200px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof InputUser>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Input: Story = {
  render: ({
    placeholder,
    onChange,
    labelText,
    name,
    icon,
    type,
    onFocus,
    onBlur,
    ...arg
  }: InputUserProps) => {
    const [{ isActive }, updateArgs] = useArgs();

    const handleActive = () => updateArgs({ isActive: true });
    const handleInActive = () => updateArgs({ isActive: false });

    return (
      <InputUser
        placeholder={placeholder}
        onChange={onChange}
        labelText={labelText}
        name={name}
        icon={<ConcealIcon isActive={isActive} />}
        isActive={isActive}
        type={type}
        onFocus={handleActive}
        onBlur={handleInActive}
        {...arg}
      />
    );
  },
  argTypes: {
    type: {
      control: "select",
      options: ["text", "password"],
    },
    icon: {
      control: "boolean",
    },
  },
  args: {
    placeholder: "Input placeholder",
    labelText: "Input label",
    name: "htmlFor",
    type: "text",
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
  },
};
