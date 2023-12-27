import theme from "@/styles/theme";
import styled from "@emotion/styled";
import { LeftArrowIcon } from "@/assets";

interface StyledProps {
  color?: string;
  fontSize?: string;
  column?: boolean;
  padding?: string;
  columnGap?: string;
  alignItems?: string;
  maxWidth?: string;
  marginTop?: string;
  justifyContent?: string;
  height?: string;
}

export const Container = styled.div`
  display: flex;
  width: 46.5rem;
  height: 18.375rem;
  justify-content: flex-start;
  align-items: center;
  column-gap: 1.25rem;
  cursor: pointer;

  img {
    width: 14.875rem;
    height: 14.875rem;
    border-radius: 0.875rem;
  }
`;

export const TextLayout = styled.div<Partial<StyledProps>>`
  display: flex;
  flex-direction: ${({ column }) => column && "column"};
  padding: ${({ padding }) => padding ?? "1.5625rem 1.875rem"};
  height: ${({ height }) => height && `${height}`};
  row-gap: 0.25rem;
  column-gap: ${({ columnGap }) => columnGap && `${columnGap}`};
  align-items: ${({ alignItems }) => alignItems && `${alignItems}`};
  margin-top: ${({ marginTop }) => marginTop && `${marginTop}`};
  justify-content: ${({ justifyContent }) =>
    justifyContent && `${justifyContent}`};
  width: 100%;
`;

export const Text = styled.p<Partial<StyledProps>>`
  display: flex;
  align-items: center;
  color: ${({ color }) => color ?? theme.color.black89};
  font-size: ${({ fontSize }) => fontSize ?? "1.5rem"};
  display: flex;
  column-gap: 0.875rem;
  max-width: ${({ maxWidth }) => maxWidth && `${maxWidth}`};
  justify-content: ${({ justifyContent }) =>
    justifyContent && `${justifyContent}`};

  span {
    color: ${theme.color.purple};
    display: flex;
    align-items: center;
    line-height: normal;
    font-weight: 500;
    column-gap: 0.25rem;

    svg {
      fill: ${theme.color.purple};
      width: 1.125rem;
      height: 1.125rem;
      margin-top: 0.5rem;
    }
  }

  strong {
    font-weight: 500;
  }
`;
