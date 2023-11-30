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
import { useNavigate } from "react-router-dom";

interface DairyListProps {
  date: Date;
}

const DiaryListPage = () => {
  const navigation = useNavigate();
  const [date, setDate] = useState(new Date());

  const dayData = [
    {
      date: "2023-11-01",
      url: "https://source.unsplash.com/random/100×100/?spain",
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
      date: "2023-11-19",
    },
    {
      date: "2023-11-20",
      url: "https://source.unsplash.com/random/100×100/?paris",
    },
    {
      date: "2023-11-21",
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
            <DiaryLayout key={dateStr}>
              {dayDataItem && dayDataItem.url ? (
                <img src={dayDataItem.url} alt="diary image" />
              ) : dayDataItem ? (
                <IconLayout>
                  <CheckIcon />
                </IconLayout>
              ) : (
                today && (
                  <IconLayout onClick={() => navigation("/diary/create")}>
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
