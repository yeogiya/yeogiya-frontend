import { CheckImage } from "@/assets";
import Button from "@/components/@common/Button";
import Layout from "@/components/@common/Layout";
import Title from "@/components/@common/Title";
import usePageNavigation from "@/features/hooks/usePageNavigation";
import theme from "@/styles/theme";
import { PATH } from "@/utils/routes";
import styled from "@emotion/styled";

const ConfirmWithdrawalPage = () => {
  const { navigate } = usePageNavigation();
  return (
    <LayoutWrapper>
      <CheckImageLogo src={CheckImage} />
      <div>
        <Title as="h1">탈퇴가 완료 되었습니다.</Title>
        <Title as="h3" css={{ color: theme.color.black50 }}>
          그 동안 이용해주셔서 감사합니다.
        </Title>
      </div>
      <ConfirmButton
        background={`${theme.color.purple}`}
        text="확인"
        onClick={() => {
          navigate(PATH.HOME);
        }}
      />
    </LayoutWrapper>
  );
};

export default ConfirmWithdrawalPage;

const LayoutWrapper = styled(Layout)`
  gap: 24px;
  padding-top: 160px;
  align-items: center;
`;

const CheckImageLogo = styled.img`
  max-width: 80px;
  display: flex;
`;

const ConfirmButton = styled(Button)`
  max-width: 100px;
  max-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
