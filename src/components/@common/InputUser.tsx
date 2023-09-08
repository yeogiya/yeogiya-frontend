import React, { InputHTMLAttributes } from "react";

import styled from "@emotion/styled";
import Button from "./Button";

interface InputUserProps extends InputHTMLAttributes<HTMLElement> {
  placeholder?: string;
  labelText: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  icon?: React.ReactNode;
}
const InputUser = ({
  placeholder,
  onChange,
  labelText,
  name,
  icon,
  ...props
}: InputUserProps) => {
  return (
    <InputWrapper>
      <LabelWrapper>
        <Label htmlFor={name}>{labelText}</Label>
      </LabelWrapper>
      <InputContainer>
        <Input placeholder={placeholder} onChange={onChange} {...props} />
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
    color: "#D9D9D9";
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
  color: #111111;
`;

const Input = styled.input`
  width: 328px;
  height: 48px;
  margin-top: 5px;
  border-radius: 7px;
  border: 1px solid #d9d9d9;
  padding: 13px 12px;
  color: #747474;
  font-size: 0.9375rem;
`;
