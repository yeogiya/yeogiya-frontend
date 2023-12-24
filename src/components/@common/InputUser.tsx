import styled, { CSSObject } from "@emotion/styled";
import { InputHTMLAttributes } from "react";
import theme from "@/styles/theme";
import * as React from "react";

export interface InputUserProps extends InputHTMLAttributes<HTMLElement> {
  placeholder?: string;
  labelText: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  icon?: React.ReactNode;
  isActive?: boolean;
  maxWidth?: number;
  css?: CSSObject;
  disabled?: boolean;
}
const InputUser = React.forwardRef(
  (
    {
      placeholder,
      onChange,
      labelText,
      name,
      icon,
      isActive,
      type,
      disabled,
      value,
      ...props
    }: InputUserProps,
    ref: React.Ref<any>
  ) => {
    return (
      <InputWrapper {...props}>
        <LabelWrapper>
          <Label htmlFor={name}>{labelText}</Label>
        </LabelWrapper>
        <InputContainer>
          <Input
            isActive={isActive}
            placeholder={placeholder}
            onChange={onChange}
            type={type}
            name={name}
            ref={ref}
            disabled={disabled}
            value={value || ""}
          />
          {icon && <button type="button">{icon}</button>}
        </InputContainer>
      </InputWrapper>
    );
  }
);

export default InputUser;

const InputWrapper = styled.div<Partial<InputUserProps>>`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  max-width: ${({ maxWidth }) => (maxWidth && maxWidth) || "328px"};
  width: 100%;

  ${({ css }) => css && css}
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;

  button {
    color: ${theme.color.black30};
    border: none;
    background: transparent;
    cursor: pointer;
    height: 48px;

    svg {
      margin-top: 8px;
      margin-left: -40px;
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
  color: ${theme.color.black};
  font-size: 0.9375rem;
`;
