"use client";

export const updateSession: (data: any) => void = (data) => {
  if (typeof window !== "undefined") {
    sessionStorage.setItem("userInfo", JSON.stringify(data));
  }
};

export const readFromSession: () => any = () => {
  if (typeof window !== "undefined") {
    const info = sessionStorage.getItem("userInfo");

    return info ? JSON.parse(info) : null;
  }
};

export const clearSession: () => void = () => {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem("userInfo");
  }
};
