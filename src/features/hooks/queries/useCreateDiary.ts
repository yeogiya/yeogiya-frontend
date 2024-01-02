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

export const useCreateDiary = () => {
  const mutationOptions: UseMutationOptions<any, any, CreateDiaryProps> = {
    mutationFn: ({ diaryContent }) => {
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

      fileImages.forEach((image: File, index: number) =>
        DiaryFormData.append(`diaryImage`, image)
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

      return postDiary(DiaryFormData);
    },
  };

  const { mutate } = useMutation(mutationOptions);

  return { mutate };
};
