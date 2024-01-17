import styled from "@emotion/styled";
import theme from "./theme";

const DiaryStyle = styled.div`
  max-width: 880px;
  min-width: 880px;
  width: 100%;
  margin: 40px auto;

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
    }
    div:first-of-type {
      color: ${theme.color.red10};
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

  .react-calendar__navigation__label > span > button {
    font-size: 18px;
    display: flex;
  }

  .react-calendar__navigation button:enabled {
    border: 1px solid ${theme.color.black40};
    border-radius: 100px;
    font-size: 18px;
    background: none;
  }

  .react-calendar__navigation {
    justify-content: center;
  }
  .react-calendar__navigation__label {
    flex-grow: 0 !important;
    margin: 0 34px;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.5;
  }
`;

const IconLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;

  :hover {
    background-color: ${theme.color.white};
  }
`;

const TodayIconLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;

  :hover {
    svg {
      display: none;
    }
  }
`;

const DiaryLayout = styled.div<{ svg: string }>`
  max-width: 100px;
  max-height: 100px;
  min-height: 100px;
  border: 1px solid ${theme.color.black40};
  border-radius: 100px;
  display: flex;
  margin-bottom: 12px;
  overflow: hidden;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;

  :hover {
    img {
      position: absolute;
    }
    background: linear-gradient(
      90deg,
      ${theme.color.purple10} 0%,
      ${theme.color.navy} 100%
    );
    ::after {
      content: url(${({ svg }) => svg});
    }
  }
`;

export { DiaryStyle, IconLayout, TodayIconLayout, DiaryLayout };
