import { postDiary } from "@/apis/diary";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

interface CreateDiaryProps {
  diaryContent: {
    fileImages: File[];
    tagValue: string[];
    selectedDate: string;
    star: number;
    isActive: boolean;
    contents: string;
  };
}

export const useCreateDiary = (
  option?: UseMutationOptions<any, any, CreateDiaryProps>
) => {
  return useMutation({
    mutationFn: ({ diaryContent }: CreateDiaryProps) => {
      const { fileImages, tagValue, selectedDate, star, isActive, contents } =
        diaryContent;
      const DiaryFormData = new FormData();

      let diaryData = {
        content: contents, // required
        openYn: isActive ? "Y" : "N", // required
        date: selectedDate, // required
        star: star, // optional
        hashtags: tagValue, // TODO: optional
      };

      let placeData = {
        kakaoId: "1", // required
        name: "장소이름", // optional
        address: "장소주소", // optional
      };

      console.log(diaryData, placeData, fileImages);

      const diaryBlob = new Blob([JSON.stringify(diaryData)], {
        type: "application/json",
      });

      const placeBlob = new Blob([JSON.stringify(placeData)], {
        type: "application/json",
      });

      DiaryFormData.append("diary", diaryBlob);
      DiaryFormData.append("place", placeBlob);

      fileImages.forEach((image: File, index: number) => {
        DiaryFormData.append("diaryImage", image);
      });

      // Object.entries(fileImages).forEach(([key, value]) => {
      //   DiaryFormData.append('diaryImage', value);
      // });

      return postDiary(DiaryFormData);
    },
    ...option,
  });
};
