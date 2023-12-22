import { KoFirstIcon, PlaceImage } from "@/assets";

import ContentLayout from "@/components/@common/ContentLayout";

const ContentPlace = () => {
  return (
    <ContentLayout
      textIcon={<KoFirstIcon />}
      content={{
        img: <img src={PlaceImage} />,
        firstLine: "어제 다녀온 장소,",
        secondLine: "어떻게 기억하시나요?",
      }}
      text={{
        firstLine: "나만 좋았던 혹은 보관하고 싶은  일상을 장소와",
        secondLine: "함께 기록해 보세요",
      }}
    />
  );
};

export default ContentPlace;
