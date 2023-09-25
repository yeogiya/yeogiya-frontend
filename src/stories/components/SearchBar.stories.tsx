import SearchBar, { SearchBarProps } from "@/components/SearchBar";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "components/SearchBar",
  component: SearchBar,
  tags: ["autodocs"],
  decorators: [(Story, { parameters }) => <Story />],
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ value, setValue, onClick }: SearchBarProps) => {
    return <SearchBar value={value} setValue={setValue} onClick={onClick} />;
  },
  args: {
    value: "",
  },
};
