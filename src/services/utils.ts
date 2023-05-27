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
