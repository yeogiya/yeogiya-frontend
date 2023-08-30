import { styled } from "styled-components";

interface ButtonProps {
  text: string;
}

const Button = ({ text = "버튼", ...props }: ButtonProps) => {
  return <ButtonWrapper {...props}>{text}</ButtonWrapper>;
};

export default Button;

const ButtonWrapper = styled.button``;
