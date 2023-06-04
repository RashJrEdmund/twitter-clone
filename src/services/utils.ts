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

export const getYears: () => string[] = () => {
  const arrYears: string[] = [];
  let minYear = 1905;

  while (minYear <= new Date().getFullYear()) {
    arrYears.push(minYear.toString());
    minYear++;
  }

  return arrYears;
};

export const getDays: (month: string) => string[] = (month) => {
  if (["April", "June", "September", "November"].includes(month)) {
    //creating 30 days;
    return new Array(30).fill("").map((_, i) => (i + 1).toString()); // 30 numbers in array
  } else if (["February"].includes(month)) {
    //creating 29 days;
    return new Array(29).fill("").map((_, i) => (i + 1).toString()); // 29 numbers in array
  } else {
    //creating 31 days;
    return new Array(31).fill("").map((_, i) => (i + 1).toString()); // 31 numbers in array
  }
};

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
