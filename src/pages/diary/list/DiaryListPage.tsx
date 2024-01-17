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
import { useDiaryList } from "@/features/queries/useDiaryList";
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
  const monthFormat = dayjs(date).format("YYYY-MM");
  const [activeMonth, setActiveMonth] = useState(monthFormat);

  const { data: diaryList } =
    accessToken &&
    useDiaryList(
      dayjs(activeMonth).format("YYYY"),
      dayjs(activeMonth).format("MM")
    );

  const handleClickTodayBtn = (date: string) => {
    if (!accessToken) {
      navigate(PATH.LOGIN);
      return;
    }
  };

  const getActiveMonth = (activeStartDate: Date) => {
    const newActiveMonth = dayjs(activeStartDate).format("YYYY-MM");
    setActiveMonth(newActiveMonth);
  };

  const handleDiaryDetailClick = (diaryId: number) => {
    navigate(`${PATH.DIARY}/${diaryId}`);
  };

  const handleDiaryCreateClick = (dateStr: string) => {
    navigate(`${PATH.DIARY_MAP}/${dateStr}`);
  };

  return (
    <DiaryStyle>
      <Calendar
        calendarType="gregory"
        formatDay={(locale: string, date: Date) => dayjs(date).format("D")}
        onChange={(value: Date) => setDate(value)}
        value={date}
        // showNeighboringMonth={false}
        onActiveStartDateChange={({ activeStartDate }) =>
          getActiveMonth(activeStartDate)
        }
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
            <>
              {dayDataItem ? (
                <DiaryLayout key={dateStr} svg={WhitePlusIcon}>
                  {dayDataItem && dayDataItem.diaryImage ? (
                    <img
                      alt="diary image"
                      src={dayDataItem.diaryImage}
                      onClick={() =>
                        handleDiaryDetailClick(dayDataItem.diaryId)
                      }
                    />
                  ) : (
                    dayDataItem && (
                      <IconLayout
                        onClick={() =>
                          handleDiaryDetailClick(dayDataItem.diaryId)
                        }
                      >
                        <CheckIcon />
                      </IconLayout>
                    )
                  )}
                </DiaryLayout>
              ) : (
                <DiaryLayout
                  key={dateStr}
                  svg={WhitePlusIcon}
                  onClick={() => {
                    handleDiaryCreateClick(dateStr);
                  }}
                >
                  {today && (
                    <TodayIconLayout
                      onClick={() => {
                        handleDiaryCreateClick(dateStr);
                      }}
                    >
                      <PlusIcon />
                    </TodayIconLayout>
                  )}
                </DiaryLayout>
              )}
            </>
          );
        }}
      />
    </DiaryStyle>
  );
};

export default DiaryListPage;
