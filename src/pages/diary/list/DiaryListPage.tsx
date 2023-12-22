import "react-calendar/dist/Calendar.css";

import { CheckIcon, PlusIcon, WhitePlusIcon } from "@/assets";
import {
  DiaryLayout,
  DiaryStyle,
  IconLayout,
  TodayIconLayout,
} from "@/styles/DiaryListPage.styles";
import { Link, useNavigate } from "react-router-dom";

import Calendar from "react-calendar";
import { PATH } from "@/utils/routes";
import dayjs from "dayjs";
import { useState } from "react";

interface DairyListProps {
  date: Date;
}

const DiaryListPage = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());

  const dayData = [
    {
      date: "2023-11-26",
      url: "https://source.unsplash.com/random/10×10/?tree",
    },
    {
      date: "2023-11-30",
    },
    {
      date: "2023-12-07",
    },
    {
      date: "2023-12-18",
      url: "https://source.unsplash.com/random/100×100/?snow",
    },
    {
      date: "2023-12-19",
      url: "https://source.unsplash.com/random/100×100/?sky",
    },
    {
      date: "2024-01-01",
    },
  ];

  const handleClickTodayBtn = () => {
    navigate(PATH.DIARY_MAP);
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
        tileContent={({ date }: DairyListProps) => {
          const dateStr = dayjs(date).format("YYYY-MM-DD");
          const today = dayjs(new Date()).format("YYYY-MM-DD") === dateStr;
          const dayDataItem = dayData.find((day) => day.date === dateStr);
          return (
            <DiaryLayout
              key={dateStr}
              svg={WhitePlusIcon}
              onClick={handleClickTodayBtn}
            >
              {dayDataItem && dayDataItem.url ? (
                <img src={dayDataItem.url} alt="diary image" />
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
