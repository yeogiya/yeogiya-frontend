import "react-calendar/dist/Calendar.css";
import { CheckIcon, PlusIcon, WhitePlusIcon } from "@/assets";
import {
  DiaryLayout,
  DiaryStyle,
  IconLayout,
  TodayIconLayout,
} from "@/styles/DiaryListPage.styles";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import { PATH } from "@/utils/routes";
import dayjs from "dayjs";
import { useState } from "react";
import { useDiaryList } from "@/features/hooks/queries/useDiaryList";
import { useToken } from "@/features/hooks/useToken";

export interface DiaryListProps {
  body: {
    totalCnt: number;
    diaries: DiaryItemProps[];
  };
  status: string;
}

export interface DiaryItemProps {
  date: string;
  diaryId: number;
  diaryImage: string;
  memberId: number;
  openYn: string;
  placeName: string;
  star: number;
}

const DiaryListPage = () => {
  const navigate = useNavigate();
  const { accessToken } = useToken();
  const [date, setDate] = useState(new Date());

  const { data: diaryList } =
    accessToken && useDiaryList(date.getFullYear(), date.getMonth() + 1);

  const handleClickTodayBtn = (date: string) => {
    if (!accessToken) {
      navigate(PATH.LOGIN);
      return;
    } else {
      navigate(`${PATH.DIARY_MAP}/${date}`);
      return;
    }
  };

  return (
    <DiaryStyle>
      <Calendar
        calendarType="gregory"
        formatDay={(locale: string, date: Date) => dayjs(date).format("D")}
        onChange={(value: Date) => setDate(value)}
        value={date}
        // showNeighboringMonth={false}
        locale="ko"
        next2Label={null}
        prev2Label={null}
        minDetail="month"
        maxDetail="month"
        navigationLabel={null}
        onClickDay={(value) => {
          const clickedDate = dayjs(value).format("YYYY-MM-DD");
          handleClickTodayBtn(clickedDate);
        }}
        tileContent={({ date }) => {
          const dateStr = dayjs(date).format("YYYY-MM-DD");
          const today = dayjs(new Date()).format("YYYY-MM-DD") === dateStr;
          const dayDataItem = diaryList?.body?.diaries.find(
            (day: DiaryItemProps) => day.date === dateStr
          );
          return (
            <DiaryLayout key={dateStr} svg={WhitePlusIcon}>
              {dayDataItem && dayDataItem.diaryImage ? (
                <img src={dayDataItem.diaryImage} alt="diary image" />
              ) : dayDataItem ? (
                <IconLayout>
                  <CheckIcon />
                </IconLayout>
              ) : (
                today && (
                  <TodayIconLayout>
                    <PlusIcon />
                  </TodayIconLayout>
                )
              )}
            </DiaryLayout>
          );
        }}
      />
    </DiaryStyle>
  );
};

export default DiaryListPage;
