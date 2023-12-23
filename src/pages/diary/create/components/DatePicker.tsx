import { useState } from "react";
import Calendar from "react-calendar";
import dayjs from "dayjs";
import styled from "@emotion/styled";
import theme from "@/styles/theme";
import Button from "@/components/@common/Button";

const DatePicker = ({ handleDatePicker, handleClickedDate, selectedDate }) => {
  return (
    <DatePickerStyle>
      <Calendar
        calendarType="gregory"
        onChange={(value: Date) => {
          const clikedDate = dayjs(value).format("YYYY-MM-DD");
          handleClickedDate(clikedDate);
        }}
        value={selectedDate}
        formatMonthYear={(locale, date) => dayjs(date).format("YYYY년, MM월")}
        formatDay={(_, date: Date) => dayjs(date).format("D")}
        showNeighboringMonth={false}
        next2Label={null}
        prev2Label={null}
        minDetail="month"
        maxDetail="month"
      />
      <ButtonLayout>
        <CancelButton text="취소" onClick={() => handleDatePicker(false)} />
        <SuccessButton text="확인" onClick={() => handleDatePicker(false)} />
      </ButtonLayout>
    </DatePickerStyle>
  );
};

export default DatePicker;

const DatePickerStyle = styled.div`
  position: absolute;
  right: 0;
  top: 48px;

  .react-calendar {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    min-width: 320px;
    min-height: 433px;
    border-radius: 12px;
    border: 1px solid ${theme.color.black20};
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);
  }

  .react-calendar__month-view__weekdays {
    max-width: 280px;
  }

  .react-calendar__month-view__days {
    max-width: 280px;
    min-height: 200px;
  }

  .react-calendar__navigation {
    max-width: 280px;
  }

  .react-calendar__month-view__days__day--weekend {
    color: ${theme.color.black50};
  }
  .react-calendar__tile {
    color: ${theme.color.black50};
  }

  .react-calendar__month-view__weekdays {
    abbr {
      text-decoration: none;
    }
  }

  .react-calendar__navigation button:disabled {
    background: none;
    color: ${theme.color.black89};
    font-weight: 700;
    font-size: 16px;
    max-width: fit-content;
    margin: 0 40px;
  }

  .react-calendar__navigation {
    display: flex;
    justify-content: center;
    margin: 32px 0 25px 0;
  }

  .react-calendar__tile--active {
    background-color: ${theme.color.black89}!important;
    color: ${theme.color.white};
    border-radius: 100%;
  }

  .react-calendar__tile--now {
    background-color: ${theme.color.white};
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    color: ${theme.color.white};
    background: ${theme.color.black89};
    border-radius: 100%;
  }

  .react-calendar__navigation__arrow {
    font-size: 22px;
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background: none;
  }

  .react-calendar__navigation__label {
    line-height: 3.2;
  }
`;

const ButtonLayout = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  width: 100%;
  padding-bottom: 24px;
  padding-right: 16px;
`;

const CancelButton = styled(Button)`
  border: 1px solid ${theme.color.black30};
  color: ${theme.color.black89};
  max-width: 55px;
  font-size: 12px;
  display: flex;
  justify-content: center;
`;
const SuccessButton = styled(Button)`
  background: ${theme.color.black89};
  max-width: 55px;
  font-size: 12px;
  justify-content: center;
`;
