import { monthNames, multiYears } from "@/services/utils";
import React, { useEffect } from "react";
import StyledSelectTag from "./StyledSelectTags";

type dateType = { month: string; day: string; year: string };

type Props = {
  setDateData: any;
  dateData: dateType;
};

export default function SelectTags({ setDateData, dateData }: Props) {
  useEffect(() => {
    setDateData({ month: monthNames[0], day: "1", year: "" });
  }, []);

  return (
    <StyledSelectTag>
      <div className="select_holder">
        <span>Month</span>
        <select
          className="months"
          onChange={({ target: { value } }) =>
            setDateData((prev: dateType) => ({ ...prev, month: value }))
          }
        >
          {monthNames.map((month) => (
            <option value={month} id={month} key={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      <div className="select_holder">
        <span>Day</span>
        <select
          className="days"
          onChange={({ target: { value } }) =>
            setDateData((prev: dateType) => ({ ...prev, day: value }))
          }
        >
          {multiYears.map((yr) => (
            <option value={yr} id={yr} key={yr}>
              {yr}
            </option>
          ))}
        </select>
      </div>

      <div className="select_holder">
        <span>Year</span>
        <select
          className="years"
          onChange={({ target: { value } }) =>
            setDateData((prev: dateType) => ({ ...prev, year: value }))
          }
        >
          {multiYears.map((yr) => (
            <option value={yr} id={yr} key={yr}>
              {yr}
            </option>
          ))}
        </select>
      </div>
    </StyledSelectTag>
  );
}
