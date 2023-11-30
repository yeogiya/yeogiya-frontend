import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";
import { CheckIcon, PlusIcon } from "@/assets";
import {
  DiaryLayout,
  DiaryStyle,
  IconLayout,
} from "@/styles/DiaryListPage.styles";
import Calendar from "react-calendar";
import { useState } from "react";
import WhitePlusIcon from "@/assets/images/WhitePlusIcon.svg";

interface DairyListProps {
  date: Date;
}

const DiaryListPage = () => {
  const [date, setDate] = useState(new Date());

  const dayData = [
    {
      date: "2023-11-01",
      url: "https://source.unsplash.com/random/10×10/?spain",
    },
    {
      date: "2023-11-03",
    },
    {
      date: "2023-11-07",
      url: "https://source.unsplash.com/random/100×100/?grass",
    },
    {
      date: "2023-11-04",
      url: "https://source.unsplash.com/random/100×100/?sky",
    },
    {
      date: "2023-11-05",
      url: "https://source.unsplash.com/random/100×100/?europe",
    },
    {
      date: "2023-11-08",
    },
    {
      date: "2023-10-09",
    },
    {
      date: "2023-10-10",
      url: "https://source.unsplash.com/random/100×100/?paris",
    },
    {
      date: "2023-10-11",
      url: "https://source.unsplash.com/random/100x100/?newyork",
    },
  ];
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
            <DiaryLayout key={dateStr} svg={WhitePlusIcon}>
              {dayDataItem && dayDataItem.url ? (
                <img src={dayDataItem.url} alt="diary image" />
              ) : dayDataItem ? (
                <IconLayout className="check">
                  <CheckIcon />
                </IconLayout>
              ) : (
                today && (
                  <IconLayout className="today">
                    <PlusIcon />
                  </IconLayout>
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
