import styled from "@emotion/styled";

interface TextAreaProps {
  name: string;
  label?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const TextArea = ({
  name,
  label,
  placeholder,
  onChange,
  ...props
}: TextAreaProps) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <TextAreaStyle
        maxLength={1000}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
    </>
  );
};

export default TextArea;

const TextAreaStyle = styled.textarea`
  resize: none;
  display: flex;
  max-width: 800px;
  width: 100%;
  max-height: 300px;
  height: 100vh;
  border: none;
  outline: none;
`;
