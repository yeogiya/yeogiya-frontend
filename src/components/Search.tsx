import SearchIcon from "@/assets/SearchIcon";
import theme from "@/styles/theme";
import styled from "@emotion/styled";
import { useCallback, useState } from "react";

const Search = () => {
  const [value, setValue] = useState<string>("");

  const handleValueChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const changeValue = e.target.value;
      setValue(changeValue);
    },
    [value]
  );

  const handleSearch = () => {};

  return (
    <SearchWrapper>
      <input
        placeholder="장소 검색"
        value={value}
        onChange={handleValueChange}
      />
      <button onClick={handleSearch}>
        <SearchIcon />
      </button>
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 37px;

  input {
    width: 193px;
    height: 34px;
    padding-left: 12px;
    border: none;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    border-radius: 9px;
    background: ${theme.color.white10};

    ::placeholder {
      color: ${theme.color.black50};
    }
  }

  button {
    border: none;
    background: transparent;
    cursor: pointer;
    margin-left: -30px;
  }
`;

export default Search;
