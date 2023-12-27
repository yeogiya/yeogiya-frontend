import HeadingText from "@/components/@common/HeadingText";
import Layout from "@/components/@common/Layout";
import Title from "@/components/@common/Title";
import { WITHDRAWAL_GUIDES, WITHDRAWAL_REASONS } from "@/constants/withdrawal";
import { useWithdraw } from "@/features/hooks/queries/useWithdraw";
import usePageNavigation from "@/features/hooks/usePageNavigation";
import { useToken } from "@/features/hooks/useToken";
import {
  CancelButton,
  SuccessButton,
} from "@/pages/diary/create/DiaryCreatePage";
import theme from "@/styles/theme";
import { PATH } from "@/utils/routes";
import styled from "@emotion/styled";
import { FormEvent, useEffect, useState } from "react";

interface WithdrawalProps {
  privacy: boolean;
  inconvenience: boolean;
  noNeed: boolean;
}

const WithdrawalPage = () => {
  const { navigate } = usePageNavigation();
  const [reasons, setReasons] = useState<WithdrawalProps>({
    privacy: false,
    inconvenience: false,
    noNeed: false,
  });
  const [detailedReason, setDetailedReason] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const withdrawalMutation = useWithdraw();
  const { resetToken } = useToken();

  const onChangeChecked = (key: string, value: boolean) => {
    setReasons((prev) => ({
      ...prev,
      privacy: key === "privacy" ? value : false,
      inconvenience: key === "inconvenience" ? value : false,
      noNeed: key === "noNeed" ? value : false,
    }));

    setIsValid(true);
  };

  useEffect(() => {
    if (!reasons.inconvenience && !reasons.noNeed && !reasons.privacy)
      setIsValid(() => false);
  }, [onChangeChecked]);

  const selectedReason: string[] = Object.keys(reasons).filter(
    (key) => reasons[key]
  );

  const reasonText: string = WITHDRAWAL_REASONS.filter((reason) =>
    selectedReason.includes(reason.id)
  )
    .map((reason) => reason.text)
    .join("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    withdrawalMutation.mutate(
      { reason: reasonText, detailedReason },
      {
        onSuccess: () => {
          resetToken();
          navigate(PATH.CONFIRM_MY_WITHDRAWAL);
        },
      }
    );
  };

  return (
    <Layout maxWidth="640px" paddingTop="80px" paddingBottom="80px">
      <form onSubmit={handleSubmit}>
        <Title as="h2" css={{ marginBottom: "32px" }}>
          회원탈퇴 안내
        </Title>
        <Border />
        <ContentsLayout>
          <ContentsWrapper>
            <Subtitle as="h3">회원탈퇴</Subtitle>
            <Contents>
              {WITHDRAWAL_GUIDES.map((guide) => (
                <p key={guide.id}>{guide.text}</p>
              ))}
            </Contents>
          </ContentsWrapper>
          <ContentsWrapper>
            <Subtitle as="h3">불편했던 점</Subtitle>
            <Contents>
              {WITHDRAWAL_REASONS.map((reason) => (
                <Checkbox key={reason.id}>
                  <input
                    type="checkbox"
                    id={reason.id}
                    onChange={() => {
                      onChangeChecked(reason.id, !reasons[reason.id]);
                    }}
                    checked={reasons[reason.id]}
                  />
                  <label htmlFor={reason.id}>{reason.text}</label>
                </Checkbox>
              ))}
              <TextAreaStyle
                placeholder="구체적인 문제점을 적어주세요."
                onChange={(e) => setDetailedReason(e.target.value)}
              />
            </Contents>
          </ContentsWrapper>
        </ContentsLayout>
        <ButtonLayout>
          <CancelButton text="취소" />
          <SuccessButton type="submit" text="완료" isValid={isValid} />
        </ButtonLayout>
      </form>
    </Layout>
  );
};

export default WithdrawalPage;

const Border = styled.div`
  border-bottom: 1px solid ${theme.color.black};
`;

const Subtitle = styled(HeadingText)`
  width: 140px;
`;

const ContentsWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

const ContentsLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  width: 100%;
  height: 100%;
`;

const Contents = styled.div`
  width: 100%;
  height: 100%;
  font-size: 0.875rem;
`;

const Checkbox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  input {
    cursor: pointer;
    appearance: none;
    width: 24px;
    height: 24px;
    margin-right: 8px;
    background-image: url("../images/uncheckbox.svg");

    &:checked {
      background-image: url("../images/checkbox.svg");
    }
  }

  label {
    cursor: pointer;
  }
`;

export const CheckBoxWrapper = styled(Checkbox)`
  flex-direction: column;
  align-items: start;
  margin-left: 30px;
  margin-bottom: 77px;
  gap: 7px;
`;

const TextAreaStyle = styled.textarea`
  resize: none;
  display: flex;
  width: 100%;
  min-height: 160px;
  height: 100%;
  border: 1px solid ${theme.color.black35};
  outline: none;
  padding: 16px 20px;
  border-radius: 10px;
`;

const ButtonLayout = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;
