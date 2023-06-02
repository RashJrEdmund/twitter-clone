export const updateSession: (data: any) => void = (data) => {
  sessionStorage.setItem("userInfo", JSON.stringify(data));
};

export const readFromSession: () => any = () => {
  const info = sessionStorage.getItem("userInfo");

  return info ? JSON.parse(info) : null;
};

export const clearSession: () => void = () => {
  sessionStorage.removeItem("userInfo");
};

export const multiYears = ["2015", "2016", "2017", "2018", "2019", "2020"];

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];