import HeadingText from "@/components/@common/HeadingText";
import { ReactNode } from "react";
import styled from "@emotion/styled";
import theme from "@/styles/theme";

interface ContentLayoutProps {
  layoutFlexDirection?: string;
  layoutColumnGap?: string;
  textIcon: ReactNode;
  content: {
    img: ReactNode;
    firstLine: string;
    secondLine: string;
  };
  text: {
    firstLine: string;
    secondLine: string;
  };
}

const ContentLayout = ({
  layoutFlexDirection,
  layoutColumnGap,
  textIcon,
  content,
  text,
}: ContentLayoutProps) => {
  return (
    <Container
      layoutFlexDirection={layoutFlexDirection}
      layoutColumnGap={layoutColumnGap}
    >
      {content.img}
      <InfoWrapper>
        {textIcon}
        <ContentHeading as="h2">
          {content.firstLine}
          <br />
          {content.secondLine}
        </ContentHeading>
        <Text>
          {text.firstLine}
          <br />
          {text.secondLine}
        </Text>
      </InfoWrapper>
    </Container>
  );
};

export default ContentLayout;

const Container = styled.section<
  Pick<ContentLayoutProps, "layoutFlexDirection" | "layoutColumnGap">
>`
  margin-top: 1.875rem;
  padding: 2.93rem 0;
  display: flex;
  flex-direction: ${({ layoutFlexDirection }) => layoutFlexDirection ?? "row"};
  justify-content: center;
  align-items: center;
  column-gap: ${({ layoutColumnGap }) => layoutColumnGap ?? "3.5rem"};
`;

const InfoWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 0.75rem;

  svg {
    height: 20px;
  }
`;

const ContentHeading = styled(HeadingText)`
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 700;
  color: ${theme.color.black89};
  line-height: normal;
  letter-spacing: -0.09rem;
`;

const Text = styled.span`
  margin-top: 0.25rem;
  font-size: 1rem;
  color: ${theme.color.black89};
  font-style: normal;
  letter-spacing: -0.05px;
`;
