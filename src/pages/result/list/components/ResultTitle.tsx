import HeadingText from "@/components/@common/HeadingText";
import theme from "@/styles/theme";
import styled from "@emotion/styled";

interface ResultTitleProps {
  searchText: string;
}

const ResultTitle = ({ searchText }: ResultTitleProps) => {
  const nowDate = new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .format(new Date())
    .replace(/\./g, "")
    .replace(/\s/g, " - ");

  return (
    <Container>
      <StyledText date>{nowDate}</StyledText>
      <HeadingText as="h1">{searchText}</HeadingText>
      <StyledText>에 대한 검색 내용입니다.</StyledText>
    </Container>
  );
};

const Container = styled.article`
  width: 100%;
  height: 11.0625rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.75rem;
  background-color: ${theme.color.white7};
  row-gap: 0.25rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 400;
    color: ${theme.color.black89};
  }
`;

const StyledText = styled.p<{ date?: boolean }>`
  color: ${({ date }) => (date ? theme.color.black50 : theme.color.black89)};
  font-size: 1.25rem;
  font-size: ${({ date }) => (date ? "0.875rem" : "1.25rem")};
  margin-bottom: ${({ date }) => date && "0.25rem"};
`;

export default ResultTitle;
