import { MouseEvent, PropsWithChildren } from "react";

import DefaultButton from "./DefaultButton";
import { createPortal } from "react-dom";
import styled from "@emotion/styled";
import theme from "@/styles/theme";

interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  close: () => void;
  text: string;
}

const Modal = ({ isOpen = false, close, text, ...props }: ModalProps) => {
  const handleClose = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    if (e.target === e.currentTarget) return close();
  };

  return (
    isOpen &&
    createPortal(
      <Container isOpen={isOpen} {...props}>
        <ModalBg onClick={handleClose}>
          <Content>
            <Text>{text}</Text>
            <Button type="button" text="확인" onClick={handleClose} />
          </Content>
        </ModalBg>
      </Container>,
      document.body
    )
  );
};

export default Modal;

const Container = styled.section<Pick<ModalProps, "isOpen">>`
  display: ${({ isOpen }) => (isOpen ? "unset" : "hidden")};
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`;

const ModalBg = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(127, 127, 127, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  width: 100%;
  max-width: 356px;
  padding: 36px 46px 30px 46px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  grid-gap: 17px;
  background: ${theme.color.white};
  transform: translateY(-10%);
  border-radius: 18px;
`;

const Text = styled.p`
  color: ${theme.color.black90};
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  word-break: keep-all;
`;

const Button = styled(DefaultButton)`
  background-color: ${theme.color.purple};
  display: inline-flex;
`;
