import { useState, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "@/utils/routes";

const useSearch = (initialValue: string = "") => {
  const [keyword, setKeyword] = useState<string>(initialValue);

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

  return {
    value: keyword,
    onChange: handleInputChange,
    onSearch: handleSearch,
  };
};

export default useSearch;
