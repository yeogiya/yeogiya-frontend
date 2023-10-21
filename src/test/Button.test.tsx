import { render, screen } from "@testing-library/react";

import Button from "@/components/@common/Button";
import theme from "@/styles/theme";

describe("<Button />", () => {
  it("button render", () => {
    render(<Button text="render test" />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("props", () => {
    render(
      <Button
        text="props test"
        background={theme.color.blue}
        color={theme.color.purple}
      />
    );

    const button = screen.getByRole("button");
    expect(button).toHaveStyle(`background: ${theme.color.blue}`);
    expect(button).toHaveStyle(`color: ${theme.color.purple}`);
  });
});
