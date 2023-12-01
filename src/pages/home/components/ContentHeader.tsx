import { KoYeogiyaLogo } from "@/assets";
import styled from "@emotion/styled";
import theme from "@/styles/theme";

const ContentHeader = () => {
  return (
    <Container>
      <KoYeogiyaLogo />
      <TextWrapper>
        위치 기반으로 내가 간 곳을 기록하고 추억 할 수 있는 플랫폼 입니다. 지금
        당장 사용해보세요
      </TextWrapper>
    </Container>
  );
};

export default ContentHeader;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1.12rem;
  width: 100%;
  margin: 0 auto;
  max-width: var(--max-width);
  height: 13.12rem;
  background: ${theme.color.purple};
  padding: 3.75rem 20.43rem 3.75rem 20.37rem;
  border-radius: 0.75rem;

  svg {
    min-width: 6.375rem;
  }
`;

const TextWrapper = styled.p`
  width: 19.18rem;
  color: ${theme.color.white};
  text-align: center;
  font-size: 0.87rem;
`;
