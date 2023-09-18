import SearchIcon from "@/assets/SearchIcon";
import theme from "@/styles/theme";
import styled from "@emotion/styled";
import { ChangeEvent, FormEvent, InputHTMLAttributes } from "react";

export interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  setValue: (input: string) => void;
  onClick: () => void;
}

const SearchBar = ({ value, setValue, onClick, ...props }: SearchBarProps) => {
  const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleSearch = () => {};

  return (
    <SearchWrapper>
      <SearchInput
        placeholder="장소 검색"
        value={value}
        onChange={handleValue}
      />
      <SearchButton type="submit" onClick={onClick}>
        <SearchIcon />
      </SearchButton>
    </SearchWrapper>
  );
};

const SearchWrapper = styled.form`
  display: flex;
  align-items: center;
  height: 37px;
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 193px;
  height: 34px;
  padding-left: 12px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  border-radius: 9px;
  background: ${theme.color.white10};
  &::placeholder {
    color: ${theme.color.black50};
  }
`;

const SearchButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  margin-left: -30px;
`;

export default SearchBar;
