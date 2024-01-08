import theme from "@/styles/theme";
import styled from "@emotion/styled";
import { Dispatch, SetStateAction, useState } from "react";
import { TextCount } from "../DiaryCreatePage";
import DeleteIcon from "@/assets/images/DeleteIcon";

interface InputTagProps {
  tagValue: string[];
  setTagValue: Dispatch<SetStateAction<string[]>>;
}

const InputTag = ({ tagValue, setTagValue }: InputTagProps) => {
  const [inputTagValue, setInputTagValue] = useState<string>("");

  const checkEmptyValue = (value: string) => {
    if (!value.length) return true;
    return false;
  };

  const changeTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value: string = e.target.value;
    setInputTagValue(value);
  };

  const handleTagInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedCmd = ["Comma", "Enter", "Space"];

    if (!allowedCmd.includes(e.code)) return;

    if (checkEmptyValue(e.currentTarget.value.trim()))
      return setInputTagValue("");

    let newInputTag = e.currentTarget.value.trim();

    const regExp = /[\{\}\[\]\/?.;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
    if (regExp.test(newInputTag)) {
      newInputTag = newInputTag.split(",").join("");
    }

    tagValue.length < 5 &&
      setTagValue((prevTag) => {
        return [...new Set([...prevTag, newInputTag])];
      });

    setInputTagValue("");
  };

  const handleDeleteTag = (tagNum: number) => {
    const newTagArr = tagValue.filter((_, idx) => idx !== tagNum);
    setTagValue(newTagArr);
  };

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    if (e.code !== "Enter") return;
    e.preventDefault();

    const regExp = /^[a-z|A-Z|가-힣|ㄱ-ㅎ|ㅏ-ㅣ|0-9| \t|]+$/g;

    if (!regExp.test(value)) setInputTagValue("");
  };

  return (
    <>
      <InputTagLayout>
        <ul>
          {tagValue.map((tag, idx) => (
            <Tag key={idx}>
              {tag}
              <div onClick={() => handleDeleteTag(idx)}>
                <DeleteIcon size="12" stroke={`${theme.color.black40}`} />
              </div>
            </Tag>
          ))}
        </ul>
        <InputTagStyle
          type="text"
          placeholder={!tagValue.length ? "# 해시태그를 입력해주세요" : ""}
          value={inputTagValue || ""}
          onChange={changeTag}
          onKeyUp={handleTagInput}
          onKeyDown={handleKeydown}
        />
      </InputTagLayout>
      <TextCount>{tagValue.length ?? 0} / 5</TextCount>
    </>
  );
};

export default InputTag;

const InputTagLayout = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  min-height: 45px;
  border: 1px solid ${theme.color.black35};
  border-radius: 14px;
  padding: 9px 20px;
  margin-bottom: 10px;
  align-items: center;

  > ul {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    width: fit-content;
  }
`;

const InputTagStyle = styled.input`
  display: flex;
  width: 100%;
  height: 100%;
  flex: 1;
  border: none;

  ::before {
    content: "#";
  }

  ::placeholder {
    color: ${theme.color.black35};
  }
`;

const Tag = styled.li`
  display: flex;
  width: auto;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: ${theme.color.purple};
  list-style: none;
  padding: 3px 10px;
  margin-right: 10px;
  cursor: pointer;
  background: ${theme.color.white10};
  border-radius: 14px;

  svg {
    margin-top: 2px;
    margin-left: 7px;
  }

  ::before {
    content: "#";
  }
`;
