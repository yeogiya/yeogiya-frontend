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

      DiaryFormData.append(
        "diary",
        JSON.stringify({
          content: contents,
          openYn: isActive ? "Y" : "N",
          star: star,
          date: selectedDate,
          hashtags: tagValue,
        })
      );

      DiaryFormData.append(
        "place",
        JSON.stringify({
          name: "장소이름",
          address: "장소주소",
          kakaoId: 1,
          latitude: 2,
          longitude: 3,
        })
      );

      fileImages.forEach((image: File, index: number) =>
        DiaryFormData.append(`diaryImage`, image)
      );

      const values = DiaryFormData.values();
      for (const pair of values) {
        console.log("pair", pair);
      }

      return postDiary(DiaryFormData);
    },
    ...option,
  });
};
