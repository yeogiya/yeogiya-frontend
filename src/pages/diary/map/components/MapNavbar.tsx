import { CloseIcon, LocationIcon, MapSearchIcon } from "@/assets";

import Header from "../../../../components/@common/Header";
import IconButton from "@/components/IconButton";
import { Link } from "react-router-dom";
import { PATH } from "@/utils/routes";
import Title from "../../../../components/@common/Title";
import { createDiary } from "@/store/diarySlice";
import styled from "@emotion/styled";
import theme from "@/styles/theme";
import { useAppDispatch } from "@/features/hooks/useAppDispatch";

const MapNavbar = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(
      createDiary({
        isClickPos: true,
      })
    );
  };

  return (
    <Header css={{ justifyContent: "space-between" }}>
      <CloseIcon />
      <Title as="h2">지도</Title>
      <BtnLayout>
        <StyledIconBtn
          type="button"
          icon={<LocationIcon />}
          onClick={handleClick}
        />
        <Link to={PATH.DIARY_MAP_SEARCH}>
          <StyledIconBtn type="button" icon={<MapSearchIcon />} />
        </Link>
      </BtnLayout>
    </Header>
  );
};

export default MapNavbar;

const BtnLayout = styled.div`
  display: flex;
  column-gap: 1.56rem;
`;

const StyledIconBtn = styled(IconButton)`
  width: 1.25rem;
  height: 1.25rem;
  margin-top: 0;
  padding: 0;
`;
