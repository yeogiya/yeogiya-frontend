import theme from "@/styles/theme";
import styled from "@emotion/styled";

export interface SubmitButtonProps {
  type?: "button" | "submit" | "reset";
  isValid: boolean;
  text: string;
  onClick: any;
}

const SubmitButton = ({ isValid, text, onClick }: SubmitButtonProps) => {
  return (
    <>
      <SubmitButtonStyle isValid={isValid} onClick={onClick}>
        {text}
      </SubmitButtonStyle>
    </>
  );
};

const SubmitButtonStyle = styled.button<Partial<SubmitButtonProps>>`
  min-width: 328px;
  margin-top: 20px;
  padding: 13px 80px;
  font-size: 16px;
  border-radius: 7px;
  color: #fff;
  justify-content: center;
  background-color: ${({ isValid }) =>
    isValid ? `${theme.color.purple}` : `${theme.color.black30}`};
`;

export default SubmitButton;
