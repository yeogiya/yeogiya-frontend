import HeadingText from "@/components/@common/HeadingText";
import Layout from "@/components/@common/Layout";
import Title from "@/components/@common/Title";
import theme from "@/styles/theme";
import styled from "@emotion/styled";
import { useState } from "react";

const WithdrawalPage = () => {
  const [feedbacks, setFeedbacks] = useState([null]);

  return (
    <Layout maxWidth="640px" paddingTop="80px">
      <Title as="h1" css={{ marginBottom: "32px" }}>
        회원탈퇴 안내
      </Title>
      <Border />
      <ContentsLayout>
        <ContentsWrapper>
          <Subtitle as="h3">회원탈퇴</Subtitle>
          <Contents>
            계약 또는 청약 철회 등에 관한 기록: 5년
            <br />
            계약 또는 청약 철회 등에 관한 기록: 5년
            <br />
            계약 또는 청약 철회 등에 관한 기록: 5년
            <br />
            계약 또는 청약 철회 등에 관한 기록: 5년
            <br />
            계약 또는 청약 철회 등에 관한 기록: 5년
            <br />
            계약 또는 청약 철회 등에 관한 기록: 5년
            <br />
          </Contents>
        </ContentsWrapper>
        <ContentsWrapper>
          <Subtitle as="h3">불편했던 점</Subtitle>
          <Contents>
            {/* <CheckboxGroup values={feedbacks} onChange={setFeedbacks}> */}
            <Checkbox>
              <input
                type="checkbox"
                id="termsAgree"
                onChange={() => {
                  //   onChangeChecked("terms");
                }}
                // checked={agree["terms"]}
              />
              <label htmlFor="reason-1">정보유출에 대한 불안함</label>
            </Checkbox>
            {/* </CheckboxGroup> */}
          </Contents>
        </ContentsWrapper>
      </ContentsLayout>
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
  padding: 20px;
  width: 100%;
`;

const Contents = styled.div`
  font-size: 0.875rem;
`;

const Checkbox = styled.div`
  input {
    cursor: pointer;
    appearance: none;
    width: 24px;
    height: 24px;
    background-image: url("../public/images/uncheckbox.svg");
  }

  input:checked {
    background-image: url("../public/images/checkbox.svg");
  }
`;

export const CheckBoxWrapper = styled(Checkbox)`
  flex-direction: column;
  align-items: start;
  margin-left: 30px;
  margin-bottom: 77px;
  gap: 7px;
`;
