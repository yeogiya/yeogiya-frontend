import styled from "@emotion/styled";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import dayjs from "dayjs";
import theme from "@/styles/theme";

const DiaryListPage = () => {
  const [date, setDate] = useState(new Date());

  return (
    <DiaryStyle>
      <Calendar
        calendarType="US" // 일요일부터 시작
        formatDay={(locale: string, date: Date) => dayjs(date).format("D")}
        // onChange={setDate}
        // value={date}
        locale="ko"
        next2Label={null}
        prev2Label={null}
        minDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
        maxDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
        navigationLabel={null}
        // showNeighboringMonth={false}
        tileContent={({ date, view }: Date) => {
          const dayList = [
            "2023-10-10",
            "2023-10-21",
            "2023-10-02",
            "2023-10-14",
            "2023-10-27",
          ];

          // const dayData = [
          //   {
          //     date: "2023-10-10",
          //     url: "https://source.unsplash.com/random/300×300",
          //   },
          //   {
          //     date: "2023-10-20",
          //     url: "https://source.unsplash.com/random/300×300",
          //   },
          //   {
          //     date: "2023-10-13",
          //     url: "https://source.unsplash.com/random/300×300",
          //   },
          //   {
          //     date: "2023-10-01",
          //     url: "https://source.unsplash.com/random/300×300",
          //   },
          //   {
          //     date: "2023-10-19",
          //     url: "https://source.unsplash.com/random/300×300",
          //   },
          // ];

          return (
            <div
              style={{
                maxWidth: "100px",
                minHeight: "100px",
                maxHeight: "100px",
                border: "1px solid #B8B5C9",
                borderRadius: "100px",
                display: "flex",
                marginBottom: "12px",
                overflow: "hidden",
                width: "100%",
                height: "100%",
              }}
              key={date}
            >
              {dayList.find(
                (day) => day === dayjs(date).format("YYYY-MM-DD")
              ) && <img src={`https://source.unsplash.com/random/300×300`} />}
            </div>
          );
        }}
      />
    </DiaryStyle>
  );
};

export default DiaryListPage;

const DiaryStyle = styled.div`
  max-width: 880px;
  margin: 0 auto;

  .react-calendar {
    width: 100%;
    border: none;
  }
  .react-calendar__navigation__label > span {
    font-size: 16px;
    color: ${theme.color.black};
  }

  .react-calendar__navigation button:disabled {
    background: none;
  }

  .react-calendar__month-view__weekdays {
    abbr {
      font-size: 18px;
      font-weight: 500;
      text-decoration: none;
      color: ${theme.color.black50};
    }
  }

  .react-calendar__tile {
    color: ${theme.color.black50};
  }

  .react-calendar__tile--active,
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: none;
  }

  .react-calendar__tile--now {
    background: none;
  }

  .react-calendar__month-view__days button {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }

  .react-calendar__navigation__label > span {
    /* display: flex; */

    button {
      font-size: 18px;
      display: flex;
    }
  }
`;
