import { monthNames, getYears, getDays } from "@/services/utils";
import React, { useEffect } from "react";
import StyledSelectTag from "./StyledSelectTags";

type dateType = { month: string; day: string; year: string };

type Props = {
  setFormData: any;
  formData: dateType;
};

export default function SelectTags({ setFormData, formData }: Props) {
  useEffect(() => {
    setFormData((prev: any) => ({
      ...prev,
      month: monthNames[0],
      day: "1",
      year: "",
    }));
  }, []);

  return (
    <StyledSelectTag>
      <div className="select_holder">
        <span>Month</span>
        <select
          className="months"
          onChange={({ target: { value } }) =>
            setFormData((prev: dateType) => ({ ...prev, month: value }))
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
            setFormData((prev: dateType) => ({ ...prev, day: value }))
          }
        >
          {getDays(formData.month).map((day) => (
            <option value={day} id={day} key={day}>
              {day}
            </option>
          ))}
        </select>
      </div>

      <div className="select_holder">
        <span>Year</span>
        <select
          className="years"
          onChange={({ target: { value } }) =>
            setFormData((prev: dateType) => ({ ...prev, year: value }))
          }
        >
          {getYears().map((yr) => (
            <option value={yr} id={yr} key={yr}>
              {yr}
            </option>
          ))}
        </select>
      </div>
    </StyledSelectTag>
  );
}
