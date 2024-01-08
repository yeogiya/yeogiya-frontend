import { BgCloseIcon, MapSearchIcon } from "@/assets";

import IconButton from "@/components/IconButton";
import styled from "@emotion/styled";
import theme from "@/styles/theme";
import {
  ChangeEvent,
  MouseEvent,
  KeyboardEvent,
  MutableRefObject,
} from "react";

interface LocationSearchProps {
  value: string;
  inputRef: MutableRefObject<any>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onReset: (e: MouseEvent<HTMLButtonElement>) => void;
  onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const LocationSearch = ({
  value,
  inputRef,
  onChange,
  onReset,
  onKeyPress,
}: LocationSearchProps) => {
  return (
    <Content>
      <MapSearchIcon />
      <Input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyPress}
        ref={inputRef}
      />
      <StyledIconBtn
        type="button"
        icon={<BgCloseIcon />}
        onClick={(e) => onReset(e)}
      />
    </Content>
  );
};

export default LocationSearch;

const Content = styled.section`
  height: 3rem;
  margin: 2.5rem 7.1875rem 0;
  padding: 0.125rem 1.25rem 0.125rem 0;
  border-radius: 0.3125rem;
  border: 1px solid ${theme.color.black35};
  display: flex;
  align-items: center;

  > svg {
    margin: 0.75rem 0.8125rem;
  }
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 1rem;
  color: ${theme.color.black89};
  letter-spacing: 0.02rem;
`;

const StyledIconBtn = styled(IconButton)`
  width: 1rem;
  height: 1rem;
  margin: 0;
  padding: 0;
`;
