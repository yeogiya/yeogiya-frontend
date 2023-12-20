import { CloseIcon, LocationIcon, MapSearchIcon } from "@/assets";

import Header from "../../../../components/@common/Header";
import IconButton from "@/components/IconButton";
import { Link } from "react-router-dom";
import { PATH } from "@/utils/routes";
import Title from "../../../../components/@common/Title";
import { createDiary } from "@/store/diarySlice";
import styled from "@emotion/styled";
import { useAppDispatch } from "@/features/hooks/useAppDispatch";
import usePageNavigation from "@/features/hooks/usePageNavigation";

const MapNavbar = () => {
  const dispatch = useAppDispatch();

  const { handleBack } = usePageNavigation();

  const handleLocationClick = () => {
    dispatch(
      createDiary({
        isClickPos: true,
      })
    );
  };

  return (
    <Header css={{ justifyContent: "space-between" }}>
      <StyledIconBtn type="button" icon={<CloseIcon />} onClick={handleBack} />
      <Title as="h2" css={{ marginRight: "-44px" }}>
        지도
      </Title>
      <BtnLayout>
        <StyledIconBtn
          type="button"
          icon={<LocationIcon />}
          onClick={handleLocationClick}
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
`;

const StyledIconBtn = styled(IconButton)`
  width: 2.75rem;
  height: 2.75rem;
  margin-top: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;
