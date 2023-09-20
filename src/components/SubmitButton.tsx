import theme from "@/styles/theme";
import DefaultButton from "./@common/DefaultButton";
import styled from "@emotion/styled";

export interface SubmitButtonProps {
  isValid: boolean;
}

const SubmitButton = styled(DefaultButton)<SubmitButtonProps>`
  background-color: ${({ isValid }) =>
    isValid ? `${theme.color.purple}` : `${theme.color.black30}`};
`;

export default SubmitButton;
