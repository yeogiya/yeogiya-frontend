import Layout from "@/components/@common/Layout";
import { PlaceSearchIcon } from "@/assets";
import styled from "@emotion/styled";
import theme from "@/styles/theme";
import useSearch from "@/features/hooks/useSearch";

const SearchPage = () => {
  const { value, onChange, onSearch } = useSearch();

  return (
    <Layout maxWidth="738px" paddingTop="0">
      <InputWrapper>
        <Input
          type="text"
          placeholder="장소 검색"
          value={value}
          onChange={onChange}
          onKeyDown={onSearch}
        />
        <button onClick={onSearch}>
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
