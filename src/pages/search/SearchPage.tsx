import Layout from "@/components/@common/Layout";
import { PlaceSearchIcon } from "@/assets";
import styled from "@emotion/styled";
import theme from "@/styles/theme";
import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "@/utils/routes";

const SearchPage = () => {
  const [keyword, setKeyword] = useState<string>("");

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };

  const handleSearch = (
    e: MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (
      (e as React.MouseEvent<HTMLButtonElement>).currentTarget.onclick ||
      (e as React.KeyboardEvent<HTMLInputElement>).key === "Enter"
    ) {
      navigate(PATH.SEARCH_RESULT_LIST + `/${keyword}`);
    }
  };

  return (
    <Layout maxWidth="738px" paddingTop="0">
      <InputWrapper>
        <Input
          type="text"
          placeholder="장소 검색"
          value={keyword}
          onChange={handleInputChange}
          onKeyDown={handleSearch}
        />
        <button onClick={handleSearch}>
          <PlaceSearchIcon />
        </button>
      </InputWrapper>
    </Layout>
  );
};

export default SearchPage;

const InputWrapper = styled.section`
  display: flex;
  align-items: center;
  height: 3.0625rem;
  margin: 11.25rem 0;
  border-bottom: 2px solid ${theme.color.purple};
  padding: 1.0625rem 1.125rem 1.0625rem;

  button {
    background: none;
    cursor: pointer;
  }
`;

const Input = styled.input`
  width: 100%;
  font-size: 1.25rem;
  color: ${theme.color.black89};
  border: none;
  font-size: 20px;
  color: ${theme.color.black89};

  &::placeholder {
    color: ${theme.color.black50};
  }
`;
