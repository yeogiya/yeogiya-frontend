import { InputHTMLAttributes } from "react";
import styled from "@emotion/styled";
import theme from "@/styles/theme";

interface InputUserProps extends InputHTMLAttributes<HTMLElement> {
  placeholder?: string;
  labelText: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  icon?: React.ReactNode;
  isActive?: boolean;
  type: string;
}
const InputUser = ({
  placeholder,
  onChange,
  labelText,
  name,
  icon,
  isActive,
  type,
  ...props
}: InputUserProps) => {
  return (
    <InputWrapper>
      <LabelWrapper>
        <Label htmlFor={name}>{labelText}</Label>
      </LabelWrapper>
      <InputContainer>
        <Input
          isActive={isActive}
          placeholder={placeholder}
          onChange={onChange}
          type={type}
          {...props}
        />
        {icon && <button type="button">{icon}</button>}
      </InputContainer>
    </InputWrapper>
  );
};

export default InputUser;

const InputWrapper = styled.div`
  margin-top: 16px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;

  button {
    color: ${theme.color.black30};
    margin: -40px;
    border: none;
    background: transparent;
    cursor: pointer;
    height: 48px;

    svg {
      margin-top: 8px;
    }
  }
`;

const LabelWrapper = styled.div``;

const Label = styled.label`
  width: 10px;
  font-size: 0.9375rem;
  color: ${theme.color.black};
`;

const Input = styled.input<Pick<InputUserProps, "isActive">>`
  width: 100%;
  min-width: 328px;
  height: 48px;
  margin-top: 5px;
  border-radius: 7px;
  border: 1px solid
    ${({ isActive }) =>
      isActive ? `${theme.color.black}` : `${theme.color.black30}`};
  padding: 13px 12px;
  color: #111111;
  font-size: 0.9375rem;
`;
